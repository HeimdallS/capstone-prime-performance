const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuid} = require('uuid');

const savedPath = "./data/saved-list.json"
const directedSavedPath = require("../data/saved-list.json")

const readSaved = () => {
    const readSavedData = fs.readFileSync(savedPath);
    const parseSavedData = JSON.parse(readSavedData);
    return parseSavedData;
}

router.post('/', (req, res) => {
    console.log("req test", req.body)
    const routine = directedSavedPath;
    const newRoutine = {
        id: uuid(),
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
    }
    routine.push(newRoutine);
    fs.writeFile(`${savedPath}`, JSON.stringify(routine), (err) => {
        if (err)
            console.log(err);
        else {
            res.status(201).send(NewRoutine)
        }
    });
    // return res.status(201).json(newRoutine);
})

router.get('/', (_req, res) => {
    try {
        const saved = readSaved(); 
        return res.status(200).json(saved);
    } catch(err) {
        return res.status(500).json({error: "Unable to proceed with request"})
    }
})

router.get('/:savedId', (req, res) => {
    const saved = readSaved(); 

    const savedExercise = saved.find((saved) => saved.id === req.params.id);
    if (!savedExercise) {
        return res.status(404).send("Exercise not found");
    }
    res.json(savedExercise)
})

module.exports = router; 