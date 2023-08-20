const nodemailer = require("nodemailer");
const sentmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "wellington28@ethereal.email",
      pass: "T53JVreskwTDy6hvVV",
    },
  });
  const info = await transporter.sendMail({
    from: '"Muneeb Saleem 👻" <muneebsaleem402@gmail.com>', // sender address
    to: "muneebgamer402@gmail.com, muneebgamer402@gmail.com", // list of receivers
    subject: "testing", // Subject line
    text: "Hello just testing", // plain text body
    html: "<b>hehehe</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};
module.exports = sentmail;
