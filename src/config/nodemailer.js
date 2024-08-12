import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const toEmail = [
  // 'pritamdas76704work@gmail.com',
]



export const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',   //'smtp.mail.yahoo.com',  // Yahoo SMTP host
  port: 465,                    // Port for SSL/TLS
  secure: true, // This ensures SSL is used
  auth: {
    user: email,
    pass: pass,
  },
});

// export const mailOptions = {
//   from: email,
//   to: toEmail,
// };
