import nodemailer from "nodemailer"
  // create reusable transporter object using the default SMTP transport
  /*const createTransport = ()=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "0271721212", // generated ethereal user
          pass: "123123", // generated ethereal password
        },
      });   
      return transporter
  }*/
  const createTransport = ()=>{
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ca03a9265aea9b",
      pass: "f1a72f7af3c4f5"
    }
  });
  return transport
  }

    // send mail with defined transport object
const sendMail = async ()=>{
    const transporter = createTransport()
     const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Bienvenido", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Mensaje enviado: ", info.messageId)
      return
}


  export {sendMail}