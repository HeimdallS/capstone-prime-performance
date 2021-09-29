import React, {useState, useEffect} from 'react'
import MuscleSelection from '../../components/MuscleSelection/MuscleSelection';
import {API_URL} from '../../utils';
import { EXP_URL } from '../../utils';
import axios from 'axios';

function Shuffle() {
    const [muscles, setMuscles] = useState([]);
    const [exercise, setExercise] = useState([]);
    // an array of muscle id's that a user has selected
    const [selectedMuscleIds, setSelectedMuscleIds] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}muscle`).then((response) => {
            setMuscles(response.data.results);
        })
    }, []);

    useEffect(() => {
        axios.get(`${EXP_URL}customize/`).then((response) => {
            setExercise(response.data.results);
        })
    }, []);

    function selectOrUnselectMuscle(id) {
        const currentlySelectedMuscleIds = selectedMuscleIds || []

        const newSelectedMuscleIds = currentlySelectedMuscleIds.includes(id) ? 
        currentlySelectedMuscleIds.filter(selectedId => selectedId !== id) : 
        [...currentlySelectedMuscleIds, id]

        setSelectedMuscleIds(newSelectedMuscleIds);
    }

    const handlePost = () => {
            axios({
                method: "POST",
                url: (`${EXP_URL}shuffle`),
                data: selectedMuscleIds,
            }).then (response => {
                console.log(response)
            })
        }
        
    return (
        <div>
            <h1 className="shuffle__title">Shuffle</h1>
            {muscles.map((muscleGroup) => (
            <div key={muscleGroup.id} className="customize__card" onClick={() => selectOrUnselectMuscle(muscleGroup.id)}>
                {
                    selectedMuscleIds.includes(muscleGroup.id) ? 
                    <div>selected</div> : null
                }
                <MuscleSelection group={muscleGroup} />
            </div>
            ))}
            <button type="submit" className="shuffle__button" onClick={() => handlePost()}>Shuffle</button>
        </div>
    )
}

export default Shuffle
