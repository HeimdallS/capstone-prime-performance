import axios from 'axios'
import React, {useState, useEffect}  from 'react'
import { API_URL } from '../../utils';
import exerciseData from '../../data/exercise-list.json'
import './ExerciseList.scss';
import ExerciseModal from '../../components/ExerciseModal/ExerciseModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ExerciseList({match}) {

    // const [exercises, setExercises] = useState([])

    // console.log(exerciseData)
    let subtitle;
    const [showModal, setShowModal] = useState(false)
    const [exercise, setExercise] = useState({})

    console.log(exercise)

    function openModal() {
        setShowModal(!showModal);
    }

    const exerciseInfo = (exercise) => {
        setExercise(exercise)
        setShowModal(!showModal);
    }

     const filterRoutine = exerciseData.results.filter((muscles => 
                muscles.muscles.includes(+match.params.exerciseId)
            ))

    // useEffect(()=> {
    //     openModal()
    // }, []); 

   
    // if(!exercise) {
    //     return <p>Loading...</p>
    // }
    return (
        
        // <div>
        //     {exercises && 
        //     exercises.map((tester) => (
        //         <h1>{tester.name}</h1>
        //     ))}
        // </div>
        <>
        {filterRoutine.map((workout) => (
            <div className="exercise__container" key={workout.id} onClick={() => exerciseInfo(workout)}>
                <img src={workout.image} className="exercise__image"></img>
                <h2 className="exercise__name">{workout.name}</h2>
            </div>
        ))}
        <Modal
        isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={openModal}
        // style={customStyles}
        contentLabel="Example Modal"
        // target={exercise}
        >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={openModal}>close</button>
        <div>{exercise.name}</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        </Modal>
        <button className="exercise__execute">Execute Routine</button>
        </>
    )
}

export default ExerciseList
