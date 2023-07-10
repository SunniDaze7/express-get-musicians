
const {Router} = require("express");
const router = Router();
const { Musician } = require("../models/index")


// musician routes
router.get('/', async (req,res)=>{
    const data = await Musician.findAll()
    res.json(data)
})

router.get('/:id', async (req,res)=>{
    let id = req.params.id
    const data = await Musician.findByPk(id)
    res.json(data)
})

router.post('/', async (req,res,next)=>{
    try{
    const musician = await Musician.create(req.body)
    res.json(musician)
    }catch(error){
        next(error)
    }
})

router.put('/:id', async(req,res, next)=>{
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

router.delete('/:id', async(req,res)=>{
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

// router.get('/bands', async(req,res)=>{
//     const data = await Band.findAll()
//     res.json(data)
// })




module.exports = router;