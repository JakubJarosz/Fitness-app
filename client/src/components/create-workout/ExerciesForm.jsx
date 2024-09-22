import React from 'react';
import { Box, Button, Divider, List, ListItem, ListItemText, Typography, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ExerciesForm({ tasks, setTasks, postExercise }) {

  // Define the order of the days
  const daysOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  // Convert tasks object to array of [day, tasksArray] and filter empty days
  const daysWithTasks = Object.entries(tasks).filter(
    ([day, tasksArray]) => tasksArray.length > 0
  );

  // Sort daysWithTasks based on the defined order
  const sortedDaysWithTasks = daysOrder
    .filter(day => tasks[day]) // Ensure the day exists in tasks
    .map(day => [day, tasks[day]]) // Create an array of [day, tasksArray]
    .filter(([day, tasksArray]) => tasksArray.length > 0); // Filter out empty days

  // Handle task deletion by id
  const handleDelete = (clickedId) => {
    const updatedTasks = Object.keys(tasks).reduce((acc, day) => {
      const filteredTasks = tasks[day].filter((task) => task.id !== clickedId);
      if (filteredTasks.length > 0) {
        acc[day] = filteredTasks; // Only include the day if it still has tasks
      }
      return acc;
    }, {});

    setTasks(updatedTasks); // Update the tasks state
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Exercise List
      </Typography>

      {sortedDaysWithTasks.map(([day, taskArray]) => (
        <Box key={day} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {day.charAt(0).toUpperCase() + day.slice(1)} {/* Capitalize the day */}
          </Typography>
          <List>
            {taskArray.map((el) => (
              <ListItem key={el.id} sx={{ alignItems: 'flex-start' }}>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <Tooltip title={el.instruction} arrow>
                      <Box
                        sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '300px', 
                          cursor: 'pointer',
                        }}
                      >
                        {el.instruction}
                      </Box>
                    </Tooltip>
                  }
                />
                <Button sx={{ mt: 2 }} onClick={() => handleDelete(el.id)}>
                  <DeleteIcon />
                </Button>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      ))}

      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary" onClick={postExercise}>
          Create Plan
        </Button>
      </Box>
    </Box>
  );
}

export default ExerciesForm;