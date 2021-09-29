import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {EXP_URL} from '../../utils';

function SavedWorkout(props) {
    const [showSaved, setShowSaved] = useState(null)

    useEffect(() => {
        axios.get(`${EXP_URL}tempsave`).then(response => {
            console.log("testing", response.data)
            const foundExercises = response.data.find((routineList) => routineList.id === props.match.params.savedId)
            console.log("filter test", foundExercises)
            setShowSaved(foundExercises);
        })
    },[])

    console.log("saved info", showSaved)

    if(showSaved === null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {showSaved.routineList.map((savedRoutine) => (
                <div>{savedRoutine.name}</div>
            ))}
                
        </>
    )
}

export default SavedWorkout
