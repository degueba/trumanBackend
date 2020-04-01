"use strict";

const nodemailer = require("nodemailer");

module.exports = {
    async main(html){
        //let account = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'testetruman@gmail.com',
                pass: 'Truman!1234'
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