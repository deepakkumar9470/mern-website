const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key : '',
        domain : ''
    }
}

const transport = nodemailer.createTransport(mailGun(auth))

const maileroptions =  {
  from : 'dk397787@test.com',
  to:  'deepakkumarchouhan272@gmail.com',
  subject : 'test',
  text: 'I would like to meet you'
}

transport.sendMail(maileroptions, (err,data)=>{
    if(err){
        console.log('Error occured');
    }else{
        console.log('Message Sent Successfully..!')
    }
})
