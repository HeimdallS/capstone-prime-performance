import React, {useState, useEffect} from 'react';
import {EXP_URL} from '../../utils';
import axios from 'axios';
import SavedWorkout from '../../components/SavedWorkout/SavedWorkout';
import {Link} from 'react-router-dom'
import './Saved.scss';

function Saved() {
    const [savedRoutines, setSavedRoutines] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/tempsave").then((response) => {
            console.log("console logged data", response.data)
            setSavedRoutines(response.data);
        })
    }, []);

    console.log("saveddata", savedRoutines)

    return (
        <main>
            <h1 className="saved__title">Saved Routines</h1>
            {savedRoutines.map((prevSaves) => (
            <div className="saved__container">
                <Link to={"saved/" + prevSaves.id} key={prevSaves.id} className="saved__card">
                    {prevSaves.title}
                </Link>
            </div>
            ))}
        </main>
    ) 
}

export default Saved
