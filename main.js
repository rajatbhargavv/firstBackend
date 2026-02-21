require('dotenv').config() // or import 'dotenv/config' if you're using ES6

const express = require('express')  // getting express
// creating express depends on different option
// option 1) const express = require('express')
// option 2) import express from "express" 

const app = express() // creating a powerfull variable app, which get call the feature of express

// const port = 3000  // making a port on which the app will listen data

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')  // sending this response when visiting the home route of our app
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)  // sending the response when port is listening a data
})
// output : Example app listening on port 3000\
app.get('/rajatbhargavv', (req,res)=>{
    res.send('You are on rajatbhargavv route')
})

app.get('/rajatbhargavv2', (req,res)=>{
    res.send("do not mess with me")
})