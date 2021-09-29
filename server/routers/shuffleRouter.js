const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuid} = require('uuid');

const exercisePath = "./data/exercise-list.json";

const savedPath = "./data/temp-saved-list.json"

const getAllExercises = () => {
    const readExerciseData = fs.readFileSync(exercisePath);
    const parseExerciseData = JSON.parse(readExerciseData);
    return parseExerciseData;
}

const readSaved = () => {
    const readSavedData = fs.readFileSync(savedPath);
    const parseSavedData = JSON.parse(readSavedData);
    return parseSavedData;
}

const randomizeNumber = (maxNumber) => Math.floor(Math.random() * maxNumber)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

router.post('/', (req, res) => {
    const routines = readSaved();
    const title = req.body.title
    const muscleIds = req.body.muscleIds
    const allExercises = getAllExercises().results
    const randomizedExercises = muscleIds.map(id => {
        const filteredExercises = allExercises.filter(exercise => exercise.muscles.includes(id))
        return {...filteredExercises[randomizeNumber(filteredExercises.length)], 
            reps: getRndInteger(10, 50),
            sets: getRndInteger(1, 5),
        }
    })
    
    const newData = {
        id: uuid(),
        title: title,
        routineList: randomizedExercises,
    }

    console.log(randomizedExercises)

    routines.push(newData)

    fs.writeFile(`${savedPath}`, JSON.stringify(routines), (err) => {
        if (err)
            console.log(err);
    });

    return res.status(200).json(newData)
})

module.exports = router; 