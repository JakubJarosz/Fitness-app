import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function TotalData() {
  const activities = useSelector((state) => state.authuser.user.activities);

  const totalWorkouts = activities.filter((el) => el.workoutCompleted === true).length;
  const allStepstaken = activities.map((el) => el.stepsTaken).reduce((acc, curr) => acc + curr, 0);
  const totalCaloriesBurned = activities.map((el) => el.totalCaloriesBurned).reduce((acc, curr) => acc + curr, 0).toFixed(2);

  console.log(activities)
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
      {/* Total Workouts Card */}
      <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Total Workouts
            </Typography>
            <Typography variant="h4" color="primary">
              {totalWorkouts}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Total Steps Taken Card */}
      <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Total Steps Taken
            </Typography>
            <Typography variant="h4" color="secondary">
              {allStepstaken}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Total Calories Burned Card */}
      <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Total Calories Burned
            </Typography>
            <Typography variant="h4" color="error">
              {totalCaloriesBurned} kcal
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TotalData;