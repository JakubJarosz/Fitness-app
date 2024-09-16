import React from 'react'
import { v4 as uuidv4 } from 'uuid'


function ExerciesForm({daysWithTasks, postExercise}) {
  
  return (
    <div>
       <div>
       <h2>Exercise list</h2>
        {daysWithTasks.map(([day,taskArray]) => (
          <>
          <h3>{day}</h3>
          <ul>
          {taskArray.map((el) => (
            <li key={uuidv4()}>{el.name}<br></br>{el.instruction}</li>
          ))}
          </ul>
          </>
        ))}
        <button onClick={postExercise}>create plan</button>
        </div>
    </div>
  )
}

export default ExerciesForm
