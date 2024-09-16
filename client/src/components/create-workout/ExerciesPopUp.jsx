import React from 'react'

function ExerciesPopUp({popup,day, setDay, addExerciseBtn}) {
  return (
    <div>
        {popup ?   <div>
            <select name="day" value={day} required onChange={((e) => setDay(e.target.value))}>
              <option value=""  hidden>
                Choose day
              </option>
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
            <option value="sunday">sunday</option>
           </select>
           <button onClick={addExerciseBtn}>Add exercise</button>
       </div> : null}
    </div>
  )
}

export default ExerciesPopUp
