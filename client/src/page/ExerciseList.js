import axios from 'axios'
import React, {useState, useEffect}  from 'react'
import { API_URL } from '../utils';
import exerciseData from '../data/exercise-list.json'

function ExerciseList({group, match}) {
    
    // console.log(match)

    const [exercises, setExercises] = useState([])

    console.log(exerciseData)

     const filterRoutine = exerciseData.results.filter((muscles => 
                muscles.muscles.includes(+match.params.exerciseId)
            ))

    useEffect(()=> {
        // fetch('data/exercise-list.json').then((response) => 
        // response.json 
        //     console.log(response)
        //     const exerciseList = response.data.results

        //     // filter attempt
            // const filterRoutine = exerciseList.filter((muscles => 
            //     muscles.muscles.includes(+match.params.exerciseId)
            // ))

        //     // console.log(filterRoutine)
        //     setExercises(filterRoutine);

        //     destructured method
        //     const{muscles} = exerciseList

        //     console.log(response.data.results[0].name)
        //     console.log(muscles)

        //     // map attempt
        //         exerciseList.map((muscles => {
        //             if (muscles.muscles === group.id) {
        //                 return muscles = group
        //             }
        //         }))

        //     // find method
        //     exercises.find((muscles => (muscles.muscles === group.id)))

        //     const exerciseList = setExercises(response.data.results);
        //     const filteredList = exerciseList.filter(response.data.results.muscle)
        // })
    }, []); 

   

    return (
        // <div>
        //     {exercises && 
        //     exercises.map((tester) => (
        //         <h1>{tester.name}</h1>
        //     ))}
        // </div>
        <div>
            {filterRoutine.map((tester) => (
                <>
                    <h1>{tester.name}</h1>
                    <img src={tester.image}></img>
                </>
            ))}
        </div>
    )
}

export default ExerciseList
