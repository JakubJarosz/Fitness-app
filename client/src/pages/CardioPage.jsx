import React , { useState, useEffect } from 'react'
import Activities from 'src/components/cardio/Activities'
import Navbar from 'src/components/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import axios from 'axios';
import dayjs from 'dayjs'; 

function CardioPage() {
  const navigate = useNavigate();
  const weight = useSelector((state) => state.authuser.user.parameters.weight);
  
  
  const [selectedDate, setSelectedDate] = useState(dayjs());
  
  const [cardio, setCardio] = useState(false);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState(0);
  const [activityList, setActivityList] = useState([]);
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [cardioList, setCardioList] = useState({
    date: dayjs().format('YYYY-MM-DD'),
    stepsTaken: 0,
    workoutCompleted: false,
    workoutCaloriesBurned: 0,
    cardio: "",
    cardioCaloriesBurned: 0
  });

  useEffect(() => {
    const fetchCardio = async () => {
      if (cardio) {
        try {
          const response = await axios.get('/api/cardio', {
            params: { activity, duration, weight },
          });
          setActivityList(response.data);
          const activitiesArray = response.data.map((el) => el.total_calories);
          const activities = activitiesArray.length > 0 ? activitiesArray[0] : 0;
          setCardioList((prev) => ({
            ...prev,
            cardioCaloriesBurned: activities 
          }));
        } catch (err) {
          console.log(err);
        }
      }
      if (cardioList.workoutCompleted) {
        const activity = "Weight lifting, light workout";
        const duration = workoutDuration;
        try {
          const response = await axios.get('/api/cardio', {
            params: { activity, duration, weight },
          });
          const caloriesBurnedArray = response.data.map((el) => el.total_calories);
          const caloriesBurned = caloriesBurnedArray.length > 0 ? caloriesBurnedArray[0] : 0;
          setCardioList((prev) => ({
            ...prev,
            workoutCaloriesBurned: caloriesBurned
          }));
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchCardio();
  }, [activity, duration, workoutDuration]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post("/create-cardio", cardioList);
       navigate("/");
       toast.success("Daily Cardio Created")
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardioSelect = (name) => {
    setActivity(name);
    setCardioList((prev) => ({
      ...prev,
      cardio: name
    }));
  };

  const handleDurationSelect = (e) => {
    setDuration(e);
  };

  const handleDate = (el) => {
    setSelectedDate(el)
    const formatDate = el.format('YYYY-MM-DD')
    setCardioList((prev) => ({
      ...prev,
      date: formatDate
    }))
  }
  return (
    <div>
      <Navbar/>
      <Activities
      setCardioList={setCardioList}
      cardioList={cardioList}
      setWorkoutDuration={setWorkoutDuration}
      setCardio={setCardio}
      cardio={cardio}
      activity={activity}
      setActivity={setActivity}
      activityList={activityList}
      handleCardioSelect={handleCardioSelect}
      selectedDate={selectedDate}
      handleDate={handleDate}
      handleSubmit={handleSubmit}
      handleDurationSelect={handleDurationSelect}
      />
    </div>
  )
}

export default CardioPage
