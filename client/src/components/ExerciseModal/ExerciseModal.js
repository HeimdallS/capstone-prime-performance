import React, {useState} from 'react'
import './ExerciseModal.scss'

function ExerciseModal({selectedEx, closeModal, onSave}) {
    const[counterRep, setCounterRep] = useState(0);
    const[counterSet, setCounterSet] = useState(0);

    function decreaseRep() {
        setCounterRep(prevCount => !prevCount ? 0 : prevCount - 1)
    }

    function increaseRep() {
        setCounterRep(prevCount => prevCount + 1)
    }

    function decreaseSet() {
        setCounterSet(prevCount => !prevCount ? 0 : prevCount - 1)
    }

    function increaseSet() {
        setCounterSet(prevCount => prevCount + 1)
    }

     const handleSubmit = (e) => {
         onSave({
             reps: counterRep,
             sets: counterSet,
         })
    }

    return (
        <>
            <div className="modal__container">
                <div className="modal__image-container">
                    <img src={selectedEx.image} className="modal__image" alt="exercise visual"/>
                </div>
                <h2 className="modal__subheader">Name</h2>
                    <p name="name" className="modal__info">{selectedEx.name}</p>
                <h2 className="modal__subheader">Description</h2>
                    <p name="name" className="modal__info">{selectedEx.description}</p>
                <div className="modal__range-container">
                    <div className="modal__sets">
                        <h2 className="modal__subheader">Sets</h2>
                        <button onClick={decreaseSet} className="modal__counter">-</button>
                        <span className="modal__integer" name="sets">{counterSet}</span>
                        <button onClick={increaseSet} className="modal__counter">+</button>
                    </div>
                    <div className="modal__reps">
                        <h2 className="modal__subheader">Reps</h2>
                        <button onClick={() => decreaseRep()} className="modal__counter">-</button>
                        <span className="modal__integer" name="reps">{counterRep}</span>
                        <button onClick={() => increaseRep()} className="modal__counter">+</button>
                    </div>
                </div>
                <div className="modal__button-container">
                    <button className="modal__cancel" type="reset" onClick={closeModal}>Cancel</button>
                    <button className="modal__save" type="submit" onClick={() => handleSubmit()}>Save</button>
                </div>
            </div>
        </>
    )
}

export default ExerciseModal

