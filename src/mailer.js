var mailer = require("nodemailer");

//Initalize the authentication of gmail options
var transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "dathan.cruz4@gmail.com", //Gmail Id
    pass: "Dcruzing7!",
  },
});

//Define mailing options like the sender email and reciever
var mailOptions = {
  from: "sender@example.com",
  to: "reciever@example.com",
  subject: "Email Subject",
  html: "<h1>Test email working</h1>",
};

//Send an email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) console.log(error);
  console.log(info);
});

/*
"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "stmp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "dathan.cruz4@gmail.com",
    pass: "Dcruzing7!",
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Test"<test@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Hi",
    text: "Hello World", // plain text body
    html: "<b>Hello</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent:
}

main().catch(console.error);
*/
