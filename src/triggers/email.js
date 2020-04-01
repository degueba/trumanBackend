"use strict";

const nodemailer = require("nodemailer");

module.exports = {
    async main(html, emailAddress){
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

        console.log(emailAddress);

        let information = await transporter.sendMail({
            from: '"Truman - Teste System"',
            to: `rbdesigner@hotmail.com, ${email}`,
            subject: "Hello",
            text: "Welcome to Truman Health!",
            html: html ? html : "<b>Hello!</b>"
        })

        console.log("Email enviado: %s", information.messageId);
    }
}