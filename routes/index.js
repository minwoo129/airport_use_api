const express = require('express');
const Airport = require('../models/airport');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const airports = await Airport.findAll();
        res.render('dataInput', { airports })
    } catch (e) {
        console.error(e);
        next(e);
    }   
});

module.exports = router;