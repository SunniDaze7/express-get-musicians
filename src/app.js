const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians/:id', async (req,res)=>{
    let id = req.params.id
    const data = await Musician.findByPk(id)
    res.json(data)
})

// app.get('musicians/1', async (req,res)=>{
//     for(let i = 0;i < Musician.findAll().length; i++){
//         const data = await Musician.findByPk(i)
//         res.json(data)
//     }
// })

// app.get('/bands', async(req,res)=>{
//     const data = await Band.findAll()
//     res.json(data)
// })




module.exports = app;