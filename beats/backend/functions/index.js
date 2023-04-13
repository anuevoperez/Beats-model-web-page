const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
      from: process.env.SMTP_HOST,
      to: dest,
      subject: "Adrián Nuevo: ¡Gracias por suscribirte!",
      html: `
      <h1 style="
        margin: 0;
        margin-bottom: 0.5rem;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue',
        helvetica, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: bolder;
        color: #333333;
    "
    >
      Gracias por suscribirte a la newsletter
    </h1>

    <p
        style="
        margin: 0;
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue',
        helvetica, sans-serif;
        color: #333333;
        font-size: 14px;
        "
    >
        Esto es una simulación a una suscripción
        en la página web "Beats Model Page". Si
        quieres saber más sobre mi o revisar otros
        proyectos, te invito a acceder a mi página
        web "www.adriannuevo.com".
    </p>
      `,
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.status(500).json({
          message: erro.toString(),
        });
      }
      return res.json({
        message: "OK!",
      });
    });
  });
});
