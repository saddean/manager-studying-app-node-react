const mail = require('nodemailer');

//config
const transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
});

// auth mail
const authMail = (usermail, token) => {
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Tuong An',
        to: usermail,
        subject: `[Xác thực] Thông Báo Xác Thực`,
        text: 'Thông báo xác thực',
        html: `Xác thực <a href="${process.env.HOST}/api/users/auth/${token}">Tại đây</a>`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                return reject(err)
            } else {
                return resolve(info)
            }
        })
    })
}

module.exports.authMail = authMail

