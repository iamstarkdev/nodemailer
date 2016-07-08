var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'Stark , <emersonsouza2704@gmail.com>', // sender address
    to: 'test@tes.com', // list of receivers
    subject: 'Teste de email com NODEJS ', // Subject line
    text: 'NODEJS È FooODA ', // plaintext body
    html: '<h1> MSGM</h1>' // html body
};

// Enviando email
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});