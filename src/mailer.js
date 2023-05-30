var mailer = require("nodemailer");

//Initalize the authentication of gmail options
var transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "dathan.cruz4@gmail.com", //Gmail Id
        pass: 'ozisthebandname'
    },
});

//Define mailing options like the sender email and reciever
var mailOptions = {
    from: "sender@example.com",
    to: "reciever@example.com",
    subject: "Email Subject",
    html: "<h1>Test email working</h1>"
};

//Send an email
transporter.sendMail(mailOptions, (error, info) => {
    if(error) console.log(error);
    console.log(info);
});