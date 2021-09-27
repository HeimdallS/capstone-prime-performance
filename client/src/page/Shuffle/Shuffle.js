import React, {useState, useEffect} from 'react'
import MuscleSelection from '../../components/MuscleSelection/MuscleSelection';
import {API_URL} from '../../utils';
import { EXP_URL } from '../../utils';
import axios from 'axios';

function Shuffle() {
    const [muscles, setGroup] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [targetMuscle, setTargetMuscle] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}muscle`).then((response) => {
            setGroup(response.data.results);
        })
    }, []);

    useEffect(() => {
        axios.get(`${EXP_URL}customize/`).then((response) => {
            setExercise(response.data.results);
        })
    }, []);

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i --) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp;
        }
        return array;
    }

    // const handleClick = (clickedMuscleGroup) => {
    //     setTargetMuscle(clickedMuscleGroup)
    //     const 
    // }

    // const exerciseRoutine = exercise;
    // for(let i = 0, length = exerciseRoutine.length; i < length; i ++) {
    // console.log(exerciseRoutine[i].muscles)
    // }

    const handleEvent = (e) => {
        e.prevenDefault()

        shuffleArray(exercise)
    }

    return (
        <div>
            <h1 className="shuffle__title">Shuffle</h1>
            {muscles.map((muscleGroup) => (
            <div key={muscleGroup.id} className="customize__card">
                <MuscleSelection group={muscleGroup}/>
            </div>
            ))}
        </div>
    )
}

export default Shuffle
