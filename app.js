const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youruser@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
    from: 'Stark , <stark@gmail.com>',
    //Lista de emails que você quer enviar (pode cadastrar vários, basta separar por " , ")
    to: 'thor@avengers.com',
    //Assunto do email
    subject: 'Teste de email com Nodejs ',
    //Aqui você pode enviar toda a mensagem
    text: 'Enviando email com nodejs + nodemailer ',
    // podemos também utilizar um HTML
    html: '<h4>Podemos enviar um html =)</h4>'
};

// Enviando email
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log('Mensagem enviada: ' + info.response);
});
