import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../utils';
import './CustomizeSelection.scss';

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
            {muscles.map((group) => (
            <Link to={"customize/" + group.id} key={group.id} className="customize__card">
                <div className="customize__image-container">
                    <img src="https://wger.de/static/images/muscles/muscular_system_front.svg" className="customize__full-body"/>
                    <img src={`https://wger.de${group.image_url_main}`} className="customize__muscle-image"/>
                </div>
                <div className="customize__muscle">{group.name}</div>
            </Link>
            ))}
        </main>
    )
}

export default CustomizeSelection
