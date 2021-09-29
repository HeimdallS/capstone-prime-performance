import React, {useState, useEffect} from 'react'
import MuscleSelection from '../../components/MuscleSelection/MuscleSelection';
import {API_URL} from '../../utils';
import { EXP_URL } from '../../utils';
import axios from 'axios';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
import qs from 'qs'

function Shuffle() {
    const [muscles, setMuscles] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [showSubmitModal, setShowSubmitModal] = useState(false)
    const [selectedMuscleIds, setSelectedMuscleIds] = useState([]);

    const history = useHistory()

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
                history.push({pathname:"/execute", search: qs.stringify({id: response.data.id})})
            })
        }

    function openSubmitModal() {
        setShowSubmitModal(true)
    }

    function closeSubmitModal() {
        setShowSubmitModal(false)
    }

    const borderStyle ={
        position: 'absolute',
        border: '9px solid rgb(206, 18, 18)',
        width: '16.7rem',
        height: '9rem',
    }

    return (
        <div>
            <h1 className="shuffle__title">Shuffle</h1>
            {muscles.map((muscleGroup) => (
            <div key={muscleGroup.id} className="customize__card" onClick={() => selectOrUnselectMuscle(muscleGroup.id)}>
                {
                    selectedMuscleIds.includes(muscleGroup.id) ? 
                    <div className="shuffle__border" style={borderStyle}></div> : null
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
