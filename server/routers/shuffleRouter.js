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

router.post('/', (req, res) => {
    const routines = readSaved();
    const title = req.body.title
    const muscleIds = req.body.muscleIds
    const allExercises = getAllExercises().results
    const randomizedExercises = muscleIds.map(id => {
        const filteredExercises = allExercises.filter(exercise => exercise.muscles.includes(id))
        return filteredExercises[randomizeNumber(filteredExercises.length)]
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
        else {
            res.status(201).send(newRoutine)
        }
    });

    return res.status(200).json(newData)

    //We have the muscle id's 
    // for each muscle id we have, we want to get a list of all eligible exercises
    // from the list of eligible exercises, we will randomly pick 3 
    // for each exercise, we will randomly generate a random number of sets and reps
})

module.exports = router; 