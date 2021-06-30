const express = require('express')
const Car = require('../models/car')
const router = new express.Router()

router.post('/api/v1/cars', async (req, res) => {
    const car = new Car(req.body)
    try {
        await car.save()
        res.status(201).send({ car, msg:'Car created succesfully' })
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/api/v1/cars/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id)
        if(car){
            res.status(201).send({ car, msg:'Car data retrieved succesfully' })
        }else{
            res.status(404).send({ car, msg:'Car does not exist' })
        }
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router