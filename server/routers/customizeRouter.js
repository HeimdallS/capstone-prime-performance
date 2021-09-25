const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuid} = require('uuid');

const customizePath = "./data/exercise-list.json";

const readExercise = () => {
    const readExerciseData = fs.readFileSync(customizePath);
    const parseExerciseData = JSON.parse(readExerciseData);
    return parseExerciseData;
}

router.get('/', (_req, res) => {
    try {
        const exercise = readExercise(); 
        return res.status(200).json(exercise);
    } catch(err) {
        return res.status(500).json({error: "Unable to proceed with request"})
    }
})

router.get('/:exerciseId', (req, res) => {
    const exercise = readExercise(); 

    const individualExercise = exercise.find((exercise) => exercise.id === req.params.id);
    if (!individualExercise) {
        return res.status(404).send("Exercise not found");
    }
    res.json(individualExercise)
})

// router.post('/:exerciseId', (req, res) => {
//     const exercise = readExercise();
//     const newRoutine = {
//         id: uuid(),
//         name: req.body.name,
//         reps: req.body.reps,
//         sets: req.body.sets, 
//     }
// })

module.exports = router; 