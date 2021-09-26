import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {EXP_URL} from '../../utils';

function SavedWorkout() {
    const [showSaved, setShowSaved] = useState([])

    useEffect(() => {
        axios.get(`${EXP_URL}saved`).then(response => {
            setShowSaved(response.data)
        })
    })

    return (
        <div>
            
        </div>
    )
}

export default SavedWorkout
