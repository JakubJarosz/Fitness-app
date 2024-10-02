import React from 'react';
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


function Activities({setCardioList, cardioList, setWorkoutDuration, setCardio, cardio,activity, setActivity, activityList, handleCardioSelect,handleDurationSelect, selectedDate,handleDate,handleSubmit}) {
  
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