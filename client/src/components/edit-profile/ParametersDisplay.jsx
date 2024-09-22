import React from 'react'
import { useSelector} from "react-redux"
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";

function ParametersDisplay() {
  const navigate = useNavigate();
  const { age, gender, goal, height, weight } = useSelector((state) => state.authuser.user.parameters || []);
  const parameters = useSelector((state) => state.authuser.user.parameters);
  // Check if parameters exist

  const hasParameters = parameters && Object.keys(parameters).length > 0;

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 3 }}>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        User Information
      </Typography>

      {hasParameters ? (
        <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Age:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{parameters.age}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Gender:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{parameters.gender}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Goal:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{parameters.goal}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Height:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{parameters.height} cm</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Weight:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{parameters.weight} kg</Typography>
          </Grid>
        </Grid>
        <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        sx={{ mt: 2 }}
        onClick={() => navigate("/parameters")}
      >
        Edit your parameters
      </Button>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography variant="body1" color="textSecondary">
            Parameters have not been created yet.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate("/parameters")} sx={{ mt: 2 }}>
            Create Parameters
          </Button>
        </Box>
      )}
    </Paper>
  </Box>
  )
}

export default ParametersDisplay
