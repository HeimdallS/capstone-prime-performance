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
})

module.exports = router; 