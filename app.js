var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'Stark , <starkdev@gmail.com>', 
    //Lista de emails que você quer enviar (pode cadastrar vários, basta separar por " , ")
    to: 'test@tes.com', 
    //Assunto do email
    subject: 'Teste de email com NODEJS ', 
    //Aqui você pode enviar toda a mensagem
    text: 'Enviando email com nodejs + nodemailer ',
    // podemos também utilizar um HTML
    html: '<h1> MSGM</h1>' 
};

// Enviando email
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});