import React, {useState, useEffect} from 'react';
import {EXP_URL} from '../../utils';
import axios from 'axios';

function Saved() {
    const [savedRoutines, setSavedRoutines] = useState([])

    useEffect(() => {
        axios.get(`${EXP_URL}tempsave/`).then((response) => {
            setSavedRoutines(response.data.results);
        })
    }, []);

    return (


        <div>
            
        </div>
    )
}

export default Saved
