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
    const routine = readSaved();
    const newRoutine = {
        // id: uuid(),
            title: req.body.title,
            id: req.body.id,
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            sets: req.body.sets,
            reps: req.body.reps,
    }

    routine.routineList.push(newRoutine);
    fs.writeFile(`${savedPath}`, JSON.stringify(routine), (err) => {
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
router.delete('/', (req,res) => { 
    console.log("delete")
    try {
        const template = {
            "title": null,
            "id": null,
            "routineList": []
          }
        const routine = readSaved(savedPath);
        // const {savedId} = req.params;
        // const filteredRoutine = routine.filter(saved => saved.id !== savedId)
        fs.writeFileSync(`${savedPath}`, JSON.stringify(template))
        res.status(200).json({message:'Deleted'})
    }
    catch {
        console.log("caught")
        res.status(500).json({message:'internal error'})
    }
})

module.exports = router; 