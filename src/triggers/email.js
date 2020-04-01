"use strict";

const nodemailer = require("nodemailer");

module.exports = {
    async main(html, email){
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
            to: `"${email}"`,
            subject: "Hello",
            text: "Hello World?",
            html: html ? html : "<b>Hello World</b>"
        })

        console.log("Email enviado: %s", information.messageId);
    }
}