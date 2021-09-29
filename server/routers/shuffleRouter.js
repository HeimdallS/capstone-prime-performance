const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuid} = require('uuid');

const shufflePath = "./data/temp-saved-list.json";

const readExercise = () => {
    const readExerciseData = fs.readFileSync(shufflePath);
    const parseExerciseData = JSON.parse(readExerciseData);
    return parseExerciseData;
}


router.post('/', (req, res) => {
    console.log("req test", req.body)
    return res.status(200).json({status: "ok"})

    //We have the muscle id's 
    // for each muscle id we have, we want to get a list of all eligible exercises
    // from the list of eligible exercises, we will randomly pick 3 
    // for each exercise, we will randomly generate a random number of sets and reps
})

module.exports = router; 