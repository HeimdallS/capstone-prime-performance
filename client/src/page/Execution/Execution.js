import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {EXP_URL} from '../../utils';
import './Execution.scss';
import {useLocation} from 'react-router-dom';
import qs from 'qs';
import {Link} from 'react-router-dom';

function Execute() {
    const [executedRoutine, setExecutedRoutine] = useState(null)

    const {search} = useLocation();
    const routineId = qs.parse(search, { ignoreQueryPrefix: true }).id;
    console.log(routineId)
    useEffect(() => {
        console.log("about to fetch")
        axios.get(`${EXP_URL}tempsave`).then((response) => {
            console.log("this is the response from the API", response.data);
            setExecutedRoutine(response.data.find((exercise) => {
                return exercise.id.toString() === routineId
            }))
        })
    }, [routineId]);

    const handleRoutineDelete = () => {
        axios.delete(`${EXP_URL}tempsave/${executedRoutine.id}`)
        .then(() => {
            setExecutedRoutine(null);
        })
    }
    
    if (executedRoutine) {
        console.log(executedRoutine)
    return (
        <div>
            {executedRoutine.routineList.map((temp) => (
                <div className="routine__container">
                    <div className="routine__image-container">
                        <img src={temp.image} className="routine__image" alt="workout visual"/>
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
            <div className="routine__button-container">
                <Link to='/' className="routine__cancel" onClick={() => handleRoutineDelete()}>Cancel</Link>
                <Link to='/saved' className="routine__submit" type="submit">Submit</Link>
            </div>
        </div>
    )
}
else {
    return null
}}
export default Execute
