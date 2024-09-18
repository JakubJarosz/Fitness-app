import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'


function ExerciesForm({daysWithTasks, postExercise}) {
  
  return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Exercise List
      </Typography>
      
      {daysWithTasks.map(([day, taskArray]) => (
        <Box key={uuidv4()} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {day}
          </Typography>
          <List>
            {taskArray.map((el) => (
              <ListItem key={uuidv4()} sx={{ alignItems: 'flex-start' }}>
                <ListItemText
                  primary={el.name}
                  secondary={el.instruction}
                />
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
  )
}

export default ExerciesForm
