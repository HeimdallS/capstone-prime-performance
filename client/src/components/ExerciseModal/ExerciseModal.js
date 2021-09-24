import React, {useState} from 'react'
import Counter from '../Counter/Counter'
import './ExerciseModal.scss'

function ExerciseModal({target, closeModal}) {

    return (
        <>
            <div className="modal__container">
                <img src={target.image} className="modal__image" />
                <h2 className="modal__subheader">Name</h2>
                    {target.name}
                <h2 className="modal__subheader">Description</h2>
                    {target.description}
                <Counter reps={"Reps"} sets={"Sets"}/>
                <div className="modal__button-container">
                    <button className="modal__cancel" onClick={closeModal}>Cancel</button>
                    <button className="modal__save">Save</button>
                </div>
            </div>
        </>
    )
}

export default ExerciseModal

