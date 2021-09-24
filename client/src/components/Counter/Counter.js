import React, {useState} from 'react'

function Counter({reps, sets}) {
    const[counterRep, setCounterRep] = useState(0);
    const[counterSet, setCounterSet] = useState(0);

    function decreaseRep() {
        setCounterRep(prevCount => prevCount - 1)
    }

    function increaseRep() {
        setCounterRep(prevCount => prevCount + 1)
    }

    function decreaseSet() {
        setCounterSet(prevCount => prevCount - 1)
    }

    function increaseSet() {
        setCounterSet(prevCount => prevCount + 1)
    }

    return (
        <div>
            <div>
                <h2 className="modal__subheader">{sets}</h2>
                <button onClick={decreaseSet} className="modal__subtract">-</button>
                <span className="modal__counter">{counterSet}</span>
                <button onClick={increaseSet} className="modal__add">+</button>
            </div>
            <div>
                <h2 className="modal__subheader">{reps}</h2>
                <button onClick={() => decreaseRep()} className="modal__subtract">-</button>
                <span className="modal__counter">{counterRep}</span>
                <button onClick={() => increaseRep()} className="modal__add">+</button>
            </div>
        </div>
    )
}

export default Counter
