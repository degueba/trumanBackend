"use strict";

const nodemailer = require("nodemailer");

module.exports = {
    async main(html){
        let account = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        })

        let information = await transporter.sendMail({
            from: '"Truman - Teste System"',
            to: "rbdesigner@hotmail.com, botelhodeveloper@gmail.com",
            subject: "Hello",
            text: "Hello World?",
            html: html ? html : "<b>Hello World</b>"
        })

        console.log("Email enviado: %s", information.messageId);
    }
}