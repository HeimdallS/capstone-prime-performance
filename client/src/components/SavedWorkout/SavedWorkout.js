import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {EXP_URL} from '../../utils';
import {Link} from 'react-router-dom';


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

    const handleRoutineDelete = () => {
        axios.delete(`${EXP_URL}tempsave/${showSaved.id}`)
        .then(() => {
            setShowSaved(null);
        })
    }

    console.log("saved info", showSaved)

    if(showSaved === null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {showSaved.routineList.map((savedRoutine) => (
            <main className="saved__content-container">
                <div className="saved__image-container">
                    <img src={savedRoutine.image} className="saved__image" alt="workout reference"/>
                </div>
                <div className="saved__info-container">
                <h3 className="saved__name">{savedRoutine.name}</h3>
                    <div className="saved__counter-container">
                        <div className="saved__sets-container">
                            <h3 className="routine__counter-title">Sets</h3>
                            <p className="routine__counter">{savedRoutine.sets}</p>
                        </div>
                        <div clsasName="saved__reps-container">
                            <h3 className="routine__counter-title">Reps</h3>
                            <p className="routine__counter">{savedRoutine.reps}</p>
                        </div>
                    </div>
                </div>
            </main>
            ))}
            <Link to='/saved' onClick={() => handleRoutineDelete()} className="saved__delete">Delete</Link>
        </>
    )
}

export default SavedWorkout
