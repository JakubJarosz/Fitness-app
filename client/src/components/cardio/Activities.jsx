import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers'; 
import { LocalizationProvider } from '@mui/x-date-pickers'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import dayjs from 'dayjs'; 

function Activities() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("/create-cardio");
      console.log(response);
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
  console.log(cardioList);
  return (
   
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Track Your Daily Cardio
        </Typography>

        <form id="true-false-form">
          <TextField
            fullWidth
            label="Daily Step Count"
            type="number"
            name="steps"
            placeholder="Steps"
            inputProps={{ min: 0 }}
            sx={{ marginBottom: 2 }}
            onChange={(e) => setCardioList((prev) => ({
              ...prev,
              stepsTaken: e.target.value
            }))}
          />

          <FormControl component="fieldset" sx={{ marginBottom: 2, mx: 2 }}>
            <FormLabel component="legend">Did you complete today's workout?</FormLabel>
            <RadioGroup
              row
              name="workoutCompleted"
              onChange={(e) => setCardioList((prev) => ({
                ...prev,
                workoutCompleted: e.target.value === "true"
              }))}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

          {cardioList.workoutCompleted && (
            <TextField
              fullWidth
              label="Duration of Your Workout (minutes)"
              type="number"
              name="duration"
              placeholder="Duration"
              onChange={(e) => setWorkoutDuration(e.target.value)}
              inputProps={{ min: 0 }}
              sx={{ marginBottom: 2 }}
            />
          )}

          <FormControl component="fieldset" sx={{ marginBottom: 2, mx: 2 }}>
            <FormLabel component="legend">Did you do any extra cardio today?</FormLabel>
            <RadioGroup
              row
              name="cardio"
              onChange={(e) => setCardio(e.target.value === 'true')}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

          {cardio && (
            <>
              <TextField
                fullWidth
                label="Type of Cardio"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Cardio"
                sx={{ marginBottom: 2 }}
              />
              {activityList.length > 1 && (
                <List sx={{ marginBottom: 2 }}>
                  {activityList.map((el) => (
                    <ListItem
                      button
                      key={el.id}
                      onClick={() => handleCardioSelect(el.name)}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      <ListItemText primary={el.name} />
                    </ListItem>
                  ))}
                </List>
              )}

              <TextField
                fullWidth
                label="Duration of Cardio (minutes)"
                type="number"
                placeholder="Duration"
                onChange={(e) => handleDurationSelect(e.target.value)}
                inputProps={{ min: 0 }}
                sx={{ marginBottom: 2 }}
              />
            </>
          )}

          {/* DatePicker for selecting date */}
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={(newValue) => handleDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth sx={{ marginBottom: 2 }} />}
          />

          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }} fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </LocalizationProvider>
  );
}

export default Activities;