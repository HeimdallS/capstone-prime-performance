import React from 'react'
import './ExerciseModal.scss'
import * as AiIcon from "react-icons/ai";

function ExerciseModal({showModal, exercise}) {
    return (
        <>
            <div className="modal__background">
                <div className="modal__wrapper" showModal={showModal}>
                    <h2 className="modal__subheader">Name</h2>
                    <h2 className="modal__subheader">Description</h2>
                    <h2 className="modal__subheader">Sets</h2>
                    <h2 className="modal__subheader">Reps</h2>
                </div>
            </div>
        </>
    )
}

export default ExerciseModal

