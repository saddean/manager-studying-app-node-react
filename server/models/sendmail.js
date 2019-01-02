const mail = require('nodemailer');

//config
const transporter = mail.createTransport({
    host: "smtp.gmail.com",
    auth: {
        type: "login", // default
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
})

// auth mail
const authMail = (ip, text) => {
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Tuong An',
        to: '11a1pro@gmail.com',
        subject: `[Xác thực] Thông Báo Xác Thực`,
        text: 'Thông báo xác thực',
        html: `Xác thực <a href="${process.env.HOST}/api/users/auth/${text}">Tại đây</a>`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                return reject(err)
            } else {
                return resolve(info)
            }
        })
    })
}

module.exports.authMail = authMail

