
require('dotenv').config()
//Import express library
const express = require("express");
const app = express()
const port = 4000

app.get('/' , function(req,res){
    res.send('Hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login' ,(req,res)=>{
    res.send('<h1>please login</h1>')
})

// app.get('/youtube',(req,res)=>{
//    res.send( '<h2> hiiiiiiii</h2> ')
// })

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})