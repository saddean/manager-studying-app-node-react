const User = require('../models/user');

//middleware authen
let authenticate = function (req, res, next) {
    let token = req.header('x-auth');
    User.findUserByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send({ "status": false, "message": e });
    });
}

module.exports = authenticate;