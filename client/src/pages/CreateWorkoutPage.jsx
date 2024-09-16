import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ExerciesForm from '../components/create-workout/ExerciesForm'
import ExerciesList from '../components/create-workout/ExerciesList'
import ExerciesPopUp from '../components/create-workout/ExerciesPopUp'

function CreateWorkoutPage() {
  const [muscle, setMuscle] = useState("")
  const [loading, setLoading] =useState(false);
  const [exData, setExdata] = useState([])

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
 
 // fetch create exercices from backend and add to database
 const postExercise = async() => {
  try {
    await axios.post("/create-exercies", {tasks})
  } catch (err) {
     console.log(err)
  }
 }
  return (
    <div>
      <ExerciesList
          handleSelectChange={handleSelectChange}
          exData={exData}
          selectDayBtn={selectDayBtn}
      />
      <ExerciesForm
      daysWithTasks={daysWithTasks}
      postExercise={postExercise}
      />
      <ExerciesPopUp
      popup={popup}
      day={day}
      setDay={setDay}
      addExerciseBtn={addExerciseBtn}
      />
    </div>
  )
}

export default CreateWorkoutPage
