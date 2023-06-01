import nodemailer from 'nodemailer';

export const action = () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'my_user',
      pass: 'my_password',
    },
  });
  
  
  const options = {
    from: 'you@example.com',
    to: 'cewoya5236@peogi.com',
    subject: 'hello world',
    html: "Prueba",
  };
  
  transporter.sendMail(options);
}