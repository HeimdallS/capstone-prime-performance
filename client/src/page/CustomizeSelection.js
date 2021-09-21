import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../utils';

function CustomizeSelection() {
    const [muscle, setPath] = useState(null);
    const {muscleId} = useParams(); 

    useEffect(() => {
        axios.get(`${API_URL}/customize/${muscleId}`).then((response) => {
            setPath(response.data.muscle);
        })
    }, [muscleId]);

    return (
        <Link to="/customize/muscleId" className="muscle__card">
            <img className="workout__muscle-img"></img>
            <h2 className="workout__muscle">Muscle Title</h2>
        </Link>
    )
}

export default CustomizeSelection
