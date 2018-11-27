module.exports = class Dict {
    static addNewWord(req, res, next) {
        req.check('english', 'không đúng định dạng').notEmpty().isString().escape();
        req.check('vietnamese', 'không đúng định dạng').notEmpty().isString().escape();
        let err = req.validationErrors();
        if (err) {
            return res.status(404).send({ status: false, message: err })
        }
        next();
    }

    static handleDict11000(error, res, next) {
        if (error.name === 'MongoError' && error.code === 11000) {
            next(error.message = "Đã tồn tài trong từ điển");
        } else {
            next();
        }
    }
}