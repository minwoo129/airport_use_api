const express = require('express');
const Airport = require('../models/airport');

const router = express.Router();

router.route('/')
    .get(async(req, res, next) => {
        try {
            const airports = await Airport.findAll();
            res.json(airports);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async(req, res, next) => {
        try {
            const {country, korName, engName, iataCode, icaoCode, terminalCnt} = req.body;
            console.log('req: ', req);
            let data = {
                country,
                korName,
                engName,
                iataCode,
                icaoCode,
            }
            if(terminalCnt) data['terminalCnt'] = terminalCnt;
            const airport = await Airport.create(data);
            res.status(201).json(airport);
        } catch (error) {
            console.error(error);
            next(error);
        }
    })

module.exports = router;