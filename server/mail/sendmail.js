const nodemailer = require('nodemailier');

//config
const transporter = nodemailer.createTransport({
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
        subject: `[Thông báo] Quá băng thông ${ip}`,
        text: 'Quá băng thông',
        html: `<p>${ip}: ${text}</p>`
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

