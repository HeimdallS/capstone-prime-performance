import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {EXP_URL} from '../../utils';
import './Execution.scss';

function Execute() {
    const [executedRoutine, setExecutedRoutine] = useState([])

    useEffect(() => {
        axios.get(`${EXP_URL}tempsave`).then((response) => {
            console.log(response.data);
            setExecutedRoutine(response.data)
        })
    }, []);

    return (
        <div>
            {executedRoutine.map((temp) => (
                <div className="routine__container">
                    <div className="routine__image-container">
                        <img src={temp.image} className="routine__image" />
                    </div>
                    <div className="routine__info-container">
                        <h2 className="routine__name">{temp.name}</h2>
                        <div className="routine__counter-container">
                            <div className="routine__sets-container">
                                <h3 className="routine__counter-title">Sets</h3>
                                <p className="routine__counter">{temp.sets}</p>
                            </div>
                            <div className="routine__reps-container">
                                <h3 className="routine__counter-title">Reps</h3>
                                <p className="routine__counter">{temp.reps}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Execute
