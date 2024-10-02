import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ExerciesForm from '../components/create-workout/ExerciesForm'
import ExerciesList from '../components/create-workout/ExerciesList'
import ExerciesPopUp from '../components/create-workout/ExerciesPopUp'
import Navbar from '../components/navbar/Navbar'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


function CreateWorkoutPage() {
  

  const navigate = useNavigate();
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
  console.log(tasks)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const fetchExercies = async() => {
      setLoading(true)
      try {
        if (muscle) {
          const response = await axios.get("/api/exercies" , {
            params: {muscle}
          })
          const updatedData = response.data.map((el) => ({...el, id: uuidv4()}))
          setExdata(updatedData)
          setLoading(false)
        }
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
    setSelectedExer({...selectedExer, name: name, instruction: instruction, id: uuidv4()})
    setPopup(true)
  }

  const addExerciseBtn = () => {
    setPopup(false)
    setTasks((prevTasks) => ({
      ...prevTasks,
      [day]: [...(prevTasks[day] || []), selectedExer], // Add new task to the day
    }));
    setSelectedExer({});
    setDay("")
  }


  // filter days that have tasks
  const daysWithTasks = Object.entries(tasks).filter(([day, tasksArray]) => tasksArray.length > 0);

 
 
// Check if any day has tasks
const hasTasks = Object.values(tasks).some((taskArray) => taskArray.length > 0);

 // fetch create exercices from backend and add to database
 const postExercise = async() => {
  try {
    await axios.post("/create-exercies", {tasks})
    navigate("/")
    toast.success("You sucessfully created your workout")
  } catch (err) {
     console.log(err)
  }
 }
  return (
    <div>
      <Navbar/>
      <ExerciesList
          handleSelectChange={handleSelectChange}
          exData={exData}
          selectDayBtn={selectDayBtn}
      />
      {hasTasks && (
        <ExerciesForm
        tasks={tasks}
        setTasks={setTasks}
        postExercise={postExercise}
        />
      )}
      <ExerciesPopUp
      popup={popup}
      setPopup={setPopup}
      day={day}
      setDay={setDay}
      addExerciseBtn={addExerciseBtn}
      />
    </div>
  )
}

export default CreateWorkoutPage
