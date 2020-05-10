require("dotenv").config();
var nodemailer = require("nodemailer");

module.exports = function (req, res) {
  console.log("Building Message");
  console.log(req.body);
  var body = req.body;
  var name = body.name;
  var email = body.email;
  var phone = body.phone;
  var message = body.message;

  var composedMessage = {
    text:
      `${name} has contacted you through your website. Here is their contact information and message: \n\n` +
      `Name: ${name} \n` +
      `Email Address: ${email} \n` +
      `Phone: ${phone} \n` +
      `Message: ${message} \n\n`,
    subject: "Website Inquiry",
  };

  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD, //this is a var stored in heroku, i dont recommend keeping a password string here
    },
  });

  transporter.sendMail(
    {
      from: "From Name <process.env.USERNAME>",
      to: process.env.USERNAME,
      subject: composedMessage.subject,
      text: composedMessage.text,
    },
    (error, info) => {
      if (error) {
        return console.log(error);
      } else {
        res.redirect("/");
        console.log("Email sent");
      }
    }
  );
};
