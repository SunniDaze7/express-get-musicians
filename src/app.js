const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { Band } = require("../models/index")
const { db } = require("../db/connection");
const { literal } = require("sequelize");

const port = 3000;

//to parse requested body objects
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// musician routes
app.get('/musicians', async (req,res)=>{
    const data = await Musician.findAll()
    res.json(data)
})

app.get('/musicians/:id', async (req,res)=>{
    let id = req.params.id
    const data = await Musician.findByPk(id)
    res.json(data)
})

app.post('/musicians', async (req,res,next)=>{
    try{
    const musician = await Musician.create(req.body)
    res.json(musician)
    }catch(error){
        next(error)
    }
})

app.put('/musicians/:id', async(req,res, next)=>{
    try{
        let id = req.params.id
        let musician = await Musician.findByPk(id)
        if(musician){
            musician = req.body
            res.json(musician)
        } else{
            throw new Error('Musician not found')
        }
    } catch(error){
        next(error)
    }
})

app.delete('/musicians/:id', async(req,res)=>{
    try{
        let id = req.params.id
        const musician = await Musician.findByPk(id)
        if(musician){
            await musician.destroy()
            res.json(musician)
        } else{
            throw new Error('Musician not found')
        }
    }catch(error){
        next(error)
    }
})

// app.get('/bands', async(req,res)=>{
//     const data = await Band.findAll()
//     res.json(data)
// })




module.exports = app;