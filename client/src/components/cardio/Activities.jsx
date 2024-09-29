import React, { useState } from 'react';
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
} from '@mui/material';

function Activities() {
  const [workoutCompleted, setWorkoutCompleted] = useState(false);
  const [cardio, setCardio] = useState(false);

  return (
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
        />

        <FormControl component="fieldset" sx={{ marginBottom: 2, mx: 2 }}> {/* Added horizontal margin */}
          <FormLabel component="legend">Did you complete today's workout?</FormLabel>
          <RadioGroup
            row
            name="workoutCompleted"
            onChange={(e) => setWorkoutCompleted(e.target.value === 'true')}
          >
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
          </RadioGroup>
        </FormControl>

        {workoutCompleted && (
          <TextField
            fullWidth
            label="Duration of Your Workout (minutes)"
            type="number"
            name="duration"
            placeholder="Duration"
            inputProps={{ min: 0 }}
            sx={{ marginBottom: 2 }}
          />
        )}

        <FormControl component="fieldset" sx={{ marginBottom: 2, mx: 2 }}> {/* Added horizontal margin */}
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
              placeholder="Cardio"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Duration of Cardio (minutes)"
              type="number"
              placeholder="Duration"
              inputProps={{ min: 0 }}
              sx={{ marginBottom: 2 }}
            />
          </>
        )}

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Activities;