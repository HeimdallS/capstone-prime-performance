import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { EXP_URL } from '../../utils';
import {useHistory} from 'react-router-dom';
import './ExerciseList.scss';
import ExerciseModal from '../../components/ExerciseModal/ExerciseModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ExerciseList({match}) {


    const [showModal, setShowModal] = useState(false)
    const [showSubmitModal, setShowSubmitModal] = useState(false)
    const [exercise, setExercise] = useState([])
    const [singleExercise, setSingleExercise] = useState(null)
    const [passInput, setPassInput] = useState("");
    const [routine, setRoutine] = useState(null)

    const history = useHistory()

    useEffect(() => {
        axios.get(`${EXP_URL}customize/`).then((response) => {
            setExercise(response.data.results);
        })
    }, []);

    function handleSave(exerciseData) {
        setRoutine(exerciseData);
    }

    function handleEvent(event) {
        event.preventDefault();

        const workoutDetails = {
            title: event.target.title.value,
            image: singleExercise.image,
            id: singleExercise.id,
            name: singleExercise.name,
            description: singleExercise.description,
            reps: routine.reps,
            sets: routine.sets,
        }
    
        if(routine.reps !== 0 && routine.sets !== 0) {
            axios({
                method: "POST",
                url: (`${EXP_URL}tempsave`),
                data: workoutDetails,
            }).then (response => {
                history.push("/execute")
            })
        } else {
            alert("Reps and Sets cannot be kept at or below 0")
        }
    }

    function openModal() {
        setShowModal(!showModal);
    }

    function closeModal() {
        setShowModal(false);
    }

    function openSubmitModal() {
        setShowSubmitModal(true)
    }

    function closeSubmitModal() {
        setShowSubmitModal(false)
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
        <main className="exercise">
            {filterRoutine.map((workout) => (
                <div className="exercise__container" key={workout.id} onClick={() => exerciseInfo(workout)}>
                    <div className="exercise__image-container">
                        <img src={workout.image} className="exercise__image" alt="workout visual"></img>
                    </div>
                    <h2 className="exercise__name">{workout.name}</h2>
                </div> 
            ))}
            <Modal
            isOpen={showModal}
            onRequestClose={openModal}
            >
                <ExerciseModal selectedEx={singleExercise} closeModal={closeModal} routineTitle={passInput} onSave={handleSave}/>
            </Modal>
            <button to='/execute' className="exercise__execute" onClick={openSubmitModal}>Execute</button>
            <Modal
            isOpen={showSubmitModal}
            onRequestClose={closeSubmitModal}
            className="exercise__submit-modal"
            >
                <form onSubmit={handleEvent}>
                    <div className="exercise__input-container">
                        <div className="exercise__title-header">Routine Title:</div>
                        <input type="text" className="exercise__title" name="title"></input>
                    </div>
                        <button className="exercise__submit-button" type="submit">Submit</button>
                </form>
            </Modal>
        </main>
    )
}

export default ExerciseList