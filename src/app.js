require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const { expr } = require('jquery')
const PORT = process.env.PORT || 5000

//Data Parsing here
app.use(express.urlencoded({extended :false}))
app.use(express.json())

const staticPath = path.join(__dirname ,'../public')
const partilasPath = path.join(__dirname ,'../templates/partials')
const templatePath = path.join(__dirname ,'../templates/views')

// middleware
app.use('/css',express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jq',express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use(express.static(staticPath))
app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partilasPath)




// Routers Here
app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.post('/email', (req, res)=>{
    console.log('Data', req.body);
    res.json({message : 'Message Received..'})
})

app.get('*', (req, res)=>{
    res.render('404error',{
        errmessage : 'OOPS ! page not found, Click on button to go back'
    })
})
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})