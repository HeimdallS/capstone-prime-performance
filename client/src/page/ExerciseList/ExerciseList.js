import axios from 'axios'
import React, {useState, useEffect}  from 'react'
import { EXP_URL } from '../../utils';
import './ExerciseList.scss';
import ExerciseModal from '../../components/ExerciseModal/ExerciseModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ExerciseList({match}) {

    const [showModal, setShowModal] = useState(false)
    const [exercise, setExercise] = useState([])
    const [singleExercise, setSingleExercise] = useState(null)

    useEffect(() => {
        axios.get(`${EXP_URL}customize/`).then((response) => {
            setExercise(response.data.results);
        })
    }, []);

    function openModal() {
        setShowModal(!showModal);
    }

    function closeModal() {
        setShowModal(false);
    }

    const exerciseInfo = (workout) => {
        setSingleExercise(workout)
        setShowModal(!showModal);
    }

    if (showModal) {
        console.log("actual exercise showing", exercise)
    } else (console.log("actual show", exercise))

    const filterRoutine = Object.values(exercise).filter(muscles => {
        if(!muscles.muscles) {
            return false
        } 
        return muscles.muscles.includes(+match.params.exerciseId)
    })

    return (
        <>
        {filterRoutine.map((workout) => (
            <div className="exercise__container" key={workout.id} onClick={() => exerciseInfo(workout)}>
                <img src={workout.image} className="exercise__image" alt="workout visual"></img>
                <h2 className="exercise__name">{workout.name}</h2>
            </div> 
         ))}
        <Modal
        isOpen={showModal}
        onRequestClose={openModal}
        >
            <ExerciseModal selectedEx={singleExercise} closeModal={closeModal}/>
        </Modal>
        <button className="exercise__execute">Execute Routine</button>
        </>
    )
}

export default ExerciseList