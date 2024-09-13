import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function ExerciesForm() {
  const [muscle, setMuscle] = useState("")
  const [loading, setLoading] =useState(false);
  const [exData, setExdata] = useState([]);

  // useState for creating exercies filtered by day
  const [day, setDay] = useState("");
  const [selectedExer, setSelectedExer] = useState({})
  const [tasks, setTasks] = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const fetchExercies = async() => {
      setLoading(true)
      try {
        const response = await axios.get("/api/exercies" , {
          params: {muscle}
        })
        setExdata(response.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchExercies()
  }, [muscle])

  const handleSelectChange = (e) => {
    setMuscle(e.target.value)
  }

  const selectDayBtn = (name, instruction) => {
    setSelectedExer({...selectedExer, name: name, instruction: instruction})
    setPopup(true)
  }

  const addExerciseBtn = () => {
    setPopup(false);
    setTasks({...tasks, [day]: [...tasks[day], selectedExer]})
    setSelectedExer({});
    setDay("")
  }


  // filter days that have tasks
  const daysWithTasks = Object.entries(tasks).filter(([day, tasksArray]) => tasksArray.length > 0);
 
 console.log(tasks)
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
        {daysWithTasks.map(([day,taskArray]) => (
          <div>
          <h2>Exercise list</h2>
          <h3>{day}</h3>
          <ul>
          {taskArray.map((el) => (
            <li key={uuidv4()}>{el.name}<br></br>{el.instruction}</li>
          ))}
          </ul>
          </div>
        ))}
    </div>
  )
}

export default ExerciesForm
