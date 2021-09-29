const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuid} = require('uuid');

const savedPath = "./data/temp-saved-list.json"
// const directedSavedPath = require("../data/temp-saved-list.json")

const readSaved = () => {
    const readSavedData = fs.readFileSync(savedPath);
    const parseSavedData = JSON.parse(readSavedData);
    return parseSavedData;
}

router.post('/', (req, res) => {
    console.log("req test", req.body)
    const routines = readSaved();
    console.log(routines);
    const newRoutine = {
        id: req.body.id,
        title: req.body.title,
        routineList: req.body.newExercises,
    }
    routines.push(newRoutine)

    fs.writeFile(`${savedPath}`, JSON.stringify(routines), (err) => {
        if (err)
            console.log(err);
        else {
            res.status(201).send(newRoutine)
        }
    });
})

router.get('/', (_req, res) => {
    try {
        const saved = readSaved(savedPath); 
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

// add saved id
router.delete('/:exerciseId', (req,res) => { 
    console.log(req.params)
    try {
        const routines = readSaved(savedPath);
        const {exerciseId} = req.params;
        const filteredRoutine = routines.filter(saved => saved.id !== exerciseId)
        fs.writeFileSync(`${savedPath}`, JSON.stringify(filteredRoutine))
        res.status(200).json({message:'Deleted'})
    }
    catch {
        console.log("caught")
        res.status(500).json({message:'internal error'})
    }
})

module.exports = router; 