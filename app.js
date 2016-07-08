var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'Stark , <emersonsouza2704@gmail.com>', 
    to: 'test@tes.com', 
    subject: 'Teste de email com NODEJS ', 
    text: 'NODEJS È FooODA ',
    html: '<h1> MSGM</h1>' 
};

// Enviando email
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});