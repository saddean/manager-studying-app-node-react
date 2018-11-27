const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('../validation/users');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Mật khẩu quá ngắn']
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Number,
        default: 2
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: '',
        require: true
    }
})

userSchema.methods.toJSON = function () {
    let user = this;
    return {
        '_id': user._id,
        'name': user.name,
        'email': user.email
    }
}

userSchema.methods.genarateToken = function () {
    let user = this;
    let token = jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1 days" });
    user.token = token;
    return user.save().then(() => {
        return token;
    });
}

userSchema.statics.LoginUser = function (email, password) {
    let user = this;
    return user.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject({ "status": false, "message": "Email hoặc password không chính xác" });
        }
        if (!user.isConfirmed) {
            return Promise.reject({ "status": false, "message": "Email chưa xác thực" });
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject({ "status": false, "message": "Email hoặc password không chính xác" });
                }
            })
        })
    })
}

userSchema.statics.findUserByToken = function (token) {
    let user = this;
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (e) {
        return Promise.reject(e);
    }
    return user.findOne({
        '_id': decoded._id,
        'token': token
    })
}

userSchema.methods.confirmEmail = function (token) {
    let user = this;
    return user.update({
        $set: {
            isConfirmed: true
        }
    })
}

userSchema.methods.removeToken = function () {
    let user = this;
    return user.update({
        $set: {
            token: ''
        }
    });
}

userSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.post('save', validator.handleUser11000);

const User = mongoose.model('users', userSchema);
module.exports = User 