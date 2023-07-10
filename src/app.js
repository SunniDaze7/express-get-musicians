const express = require("express");
const app = express();
const musiciansRouter = require('../routes/musicianRoutes')
const port = 3000;

//to parse requested body objects
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/musicians', musiciansRouter)



module.exports = app;