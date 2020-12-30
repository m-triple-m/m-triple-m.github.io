const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {

    let data = req.body;

    new Model(data).save()
    .then((data) => {
        res.status(200).json({message : 'success'});
    })
    .catch( err => {
        res.status(500).json(err);
    })
})

router.put('/update/:id', (req, res) => {

    let data = req.body;

    Model.findByIdAndUpdate(req.params.id, data)
    .then((data) => {
        res.status(200).json({message : 'success'});
    })
    .catch( err => {
        res.status(500).json(err);
    })
})

router.get('/getbyusername/:username', (req, res) => {

    let usernm = req.params.username;

    Model.findOne({username : usernm})
    .then((data) => {
        console.log('data fetched from user');
        res.status(200).json(data);
    })
    .catch( err => {
        console.error(err);
        res.status(500).json(err);
    })
})


router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({email : req.params.email})
    .then((data) => {
        console.log('data fetched from user');
        res.status(200).json(data);
    })
    .catch( err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log('data fetched from user');
        res.status(200).json(data);
    })
    .catch( err => {
        console.error(err);
        res.status(500).json(err);
    })
})

router.get('/getall', (req, res) => {


    Model.find({})
    .then((data) => {
        console.log('data fetched from user');
        res.status(200).json(data);
    })
    .catch( err => {
        console.error(err);
        res.status(500).json(err);
    })
})


module.exports = router;