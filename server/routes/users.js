var express = require('express');
var router = express.Router();
const validator = require('../validation/users');
const User = require('../models/user');
const authenticate = require('./Authentication');
const mailler = require('../models/sendmail');

//register
router.post('/register', validator.RegisterValidate, (req, res) => {
    let { email, name, password } = req.body;
    let obj = { email, password, name };
    let user = new User(obj);

    user.save((err, user) => {
        if (err)
            return res.status(400).send({ "status": false, "message": err.message });
        let userMail = user.email;
        user.genarateToken()
            .then(token => {
                mailler.authMail(userMail, token)
                    .then(info => {
                        console.log(info);
                        return res.status(200).send({ "status": true, "message": "Email đã được gửi" })
                    })
                    .catch(e => {
                        console.log(e);
                        return res.status(400).send({ "status": false, "message": "Something is wrong" })
                    })
            })
            .catch(e => {
                console.log(e);
                return res.status(400).send(e)
            })
    })
})


router.get('/auth/:token', (req, res) => {
    let token = req.params.token;
    User.findUserByToken(token).then(user => {
        if (!user) {
            return res.status(400).send({ "status": false, "message": "Something is wrong" })
        } else {
            user.confirmEmail().then(user => {
                return res.render('index');
            })
        }
    }).catch(e => {
        return res.status(400).send({ "status": false, "message": e })
    })
})

//login
router.post('/login', validator.LoginValidate, (req, res) => {
    let { email, password } = req.body;
    User.LoginUser(email, password).then(user => {
        user.genarateToken().then((token) => {
            res.header('x-auth', token).send({ "status": true, "message": user });
        })
    }).catch(e => {
        res.status(400).send(e);
    })
})

//Route user authen
router.get('/me', authenticate, (req, res) => {
    return res.send({ "status": true, "message": req.user });
})

//logout
router.delete('/me', authenticate, (req, res) => {
    let user = req.user;
    user.removeToken(req.token).then(() => {
        res.status(200).send({ "status": true, "message": "Remove successfull" })
    })
})


module.exports = router;  