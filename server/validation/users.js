module.exports = class Validator {
    static RegisterValidate(req, res, next) {
        req.checkBody('email', 'không đúng định đạng').notEmpty().isEmail().escape();
        req.checkBody('password', 'không đúng định dạng').notEmpty().escape();
        req.checkBody('name', 'không đúng định dạng').notEmpty().escape();
        let err = req.validationErrors();
        if (err) {
            return res.status(404).send({ status: false, message: err })
        }
        next();
    }

    static LoginValidate(req, res, next) {
        req.checkBody('email', 'không đúng định đạng').notEmpty().isEmail().escape();
        req.checkBody('password', 'không đúng định dạng').notEmpty().escape();
        let err = req.validationErrors();
        if (err) {
            return res.status(404).send({ status: false, message: err })
        }
        next();
    }

    static handleUser11000(error, res, next) {
        if (error.name === 'MongoError' && error.code === 11000) {
            next(error.message = "Tài khoản đã được sử dụng");
        } else {
            next();
        }
    }

}