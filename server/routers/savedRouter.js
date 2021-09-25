// const { json } = require('express');
// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const {v4: uuid} = require('uuid');

// const savedPath = "./data/saved-list.json"

// const readSaved = () => {
//     const readSavedData = fs.readFileSync(customizePath);
//     const parseSavedData = JSON.parse(readExerciseData);
//     return parseSavedData;
// }

// router.get('/', (_req, res) => {
//     try {
//         const saved = readSAved(); 
//         return res.status(200).json(video);
//     } catch(err) {
//         return res.status(500).json({error: "Unable to proceed with request"})
//     }
// })

// router.get('/:savedId', (req, res) => {
//     const saved = readSaved(); 

//     const savedExercise = saved.find((saved) => saved.id === req.params.id);
//     if (!savedExercise) {
//         return res.status(404).send("Exercise not found");
//     }
//     res.json(savedExercise)
// })

// module.exports = router; 