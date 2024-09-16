import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function ExerciesList({handleSelectChange,exData,selectDayBtn}) {
  return (
    <div>
        <div>
      <select name="muscle" onChange={handleSelectChange}>
      <option value="abdominals">abdominals</option>
      <option value="abductors">abductors</option>
      <option value="adductors">adductors</option>
        <option value="biceps">biceps</option>
        <option value="calves">calves</option>
        <option value="chest">chest</option>
        <option value="forearms">forearms</option>
        <option value="glutes">glutes</option>
        <option value="hamstrings">hamstrings</option>
        <option value="lats">lats</option>
        <option value="lats">lower_back</option>
        <option value="middle_back">middle_back</option>
        <option value="middle_back">neck</option>
        <option value="quadriceps">quadriceps</option>
        <option value="traps">traps</option>
        <option value="triceps">triceps</option>
      </select>
      </div>
      <div>
       <ul>
        {exData.map((el) => 
        <li  key={uuidv4()}>
           {el.name} <br></br>
           Instructions : {el.instructions} <br></br>
           <button onClick={(() => selectDayBtn(el.name, el.instructions))}>Select day</button>
        </li>)}
       </ul>
      </div>
    </div>
  )
}

export default ExerciesList
