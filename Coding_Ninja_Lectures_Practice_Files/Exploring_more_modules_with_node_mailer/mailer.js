
// import nodemailer
const nodemailer = require('nodemailer');

//2 configure email amd sent it
async function sendMail(){

    //1 Create email transporter
    // (SMTP) simple mail transfer protocol
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'vikrantkumarprajapati4@gmail.com',
            pass: 'fqlg xhzv njet mkzs',
        },
    });

    // 2 configure email content
    const mailOptions={
        from: 'vikrantkumarprajapati4@gmail.com',
        to: 'arun.webcode@gmail.com',
        subject: 'Welcome to nodejs App',
        text: 'This is the mail using nodemailer in nodeJs',
    };

    //3 Send the email
    try{
        transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch(err){
        console.log('Email send failed with error: ' + err);
    }
}

sendMail();