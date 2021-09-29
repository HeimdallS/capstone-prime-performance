import React from 'react'

function MuscleSelection({group}) {

    return (
        <>
            <div className="customize__image-container">
                {
                    (group.is_front === true)
                    ? <img src="https://wger.de/static/images/muscles/muscular_system_front.svg" className="customize__full-body" alt="front body shot"/> 
                    : <img src="https://wger.de/static/images/muscles/muscular_system_back.svg" className="customize__full-body" alt="back body shot"/>
                }
                <img src={`https://wger.de${group.image_url_main}`} className="customize__muscle-image" alt="primary body shot"/>
            </div>
            <div className="customize__muscle">{group.name}</div>
        </>
    )
}

export default MuscleSelection
