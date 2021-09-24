import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../../utils';
import './CustomizeSelection.scss';
import MuscleSelection from '../../components/MuscleSelection/MuscleSelection';

function CustomizeSelection() {
    const [muscles, setGroup] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}muscle`).then((response) => {
            setGroup(response.data.results);
        })
    }, []);

    return (
        <main>
            <h1 className="customize__title">Custom Workout</h1>
            {muscles.map((muscleGroup) => (
            <Link to={"customize/" + muscleGroup.id} key={muscleGroup.id} className="customize__card">
                <MuscleSelection group={muscleGroup}/>
            </Link>
            ))}
        </main>
    )
}

export default CustomizeSelection
