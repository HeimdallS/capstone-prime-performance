import React, {useState, useEffect} from 'react'
import MuscleSelection from '../../components/MuscleSelection/MuscleSelection';
import {API_URL} from '../../utils';
import { EXP_URL } from '../../utils';
import axios from 'axios';
import Modal from 'react-modal';

function Shuffle() {
    const [muscles, setMuscles] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [showSubmitModal, setShowSubmitModal] = useState(false)
    // an array of muscle id's that a user has selected
    const [selectedMuscleIds, setSelectedMuscleIds] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}muscle`).then((response) => {
            setMuscles(response.data.results);
        })
    }, []);

    useEffect(() => {
        axios.get(`${EXP_URL}customize/`).then((response) => {
            setExercise(response.data.results);
        })
    }, []);

    function selectOrUnselectMuscle(id) {
        const currentlySelectedMuscleIds = selectedMuscleIds || []

        const newSelectedMuscleIds = currentlySelectedMuscleIds.includes(id) ? 
        currentlySelectedMuscleIds.filter(selectedId => selectedId !== id) : 
        [...currentlySelectedMuscleIds, id]

        setSelectedMuscleIds(newSelectedMuscleIds);
    }

    const handlePost = (event) => {
        event.preventDefault();
        const data = {
            muscleIds: selectedMuscleIds, 
            title: event.target.title.value,}
            axios({
                method: "POST",
                url: (`${EXP_URL}shuffle`),
                data: data,
            }).then (response => {
                console.log(response)
            })
        }

    function openSubmitModal() {
        setShowSubmitModal(true)
    }

    function closeSubmitModal() {
        setShowSubmitModal(false)
    }

    return (
        <div>
            <h1 className="shuffle__title">Shuffle</h1>
            {muscles.map((muscleGroup) => (
            <div key={muscleGroup.id} className="customize__card" onClick={() => selectOrUnselectMuscle(muscleGroup.id)}>
                {
                    selectedMuscleIds.includes(muscleGroup.id) ? 
                    <div>selected</div> : null
                }
                <MuscleSelection group={muscleGroup} />
            </div>
            ))}
            <Modal
            isOpen={showSubmitModal}
            onRequestClose={closeSubmitModal}
            className="exercise__submit-modal"
            >
                <form onSubmit={handlePost}>
                    <div className="exercise__input-container">
                        <div className="exercise__title-header">Routine Title:</div>
                        <input type="text" className="exercise__title" name="title"></input>
                    </div>
                        <button className="exercise__submit-button" type="submit">Submit</button>
                </form>
            </Modal>
            <button className="shuffle__button" onClick={openSubmitModal}>Shuffle</button>
        </div>
    )
}

export default Shuffle
