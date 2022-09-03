const express = require('express');
const Airline = require('../models/airline');

const router = express.Router();

router.route('/')
    .get(async(req, res, next) => {
        try {
            const airlines = await Airline.findAll();
            res.json(airlines);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async(req, res, next) => {
        try {
            const {korName, engName, iataCode, icaoCode, activeStatus} = req.body;
            console.log('req: ', req);
            const airline = await Airline.create({
                korName,
                engName,
                iataCode,
                icaoCode,
                activeStatus
            });
            res.status(201).json(airline)
        } catch (err) {
            console.error(err);
            next(err);
        }
    });


module.exports = router;