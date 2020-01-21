const express = require('express')

const Cars = require('./carsModel.js')
const db = require('./dbConfig.js')
const router = express.Router()

// read all(works)
router.get('/', (req, res) => {

    // Cars.get()
    //     .then(actions => {
    //         res.status(200).json(actions)
    //     })
    //     .catch(err => {
    //         res.status(500).json({ error: "The projects information could not be retrieved." })

    //     })
    db.select("*")
    .from("cars")
    .then(cars => {
        console.log('here', cars)
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get cars' });
    
    })
})

// read ith(works)
router.get('/:id', (req, res) => {
    db.select("*")
    .from("cars")
    .where('id', '=', req.params.id)
    .first()
    .then(car => {
        console.log(car)
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get car' });
    
    })

})

// create new one(works)
router.post('/', (req, res) => {

    const { VIN, make, model, milage } = req.body
    if(!VIN || !make || !model || !milage) {
        res.status(500).json({ message: 'account info is invalid' })
    } else {
        db('cars')
        .insert({ VIN: VIN, make: make, model: model, milage:milage }, 'id')
        .then(addedCar => {
            res.status(200).json(addedCar)
        })
        .catch(err => {

            res.status(500).json({ message: 'Failed to add car' });

        })
    }
})
module.exports = router