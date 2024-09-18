import React, {useState} from 'react';
import { Box, Button, Divider, List, ListItem, ListItemText, Typography, Tooltip } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';

function ExerciesForm({ daysWithTasks, postExercise }) {
  const updatedDaysWithTasks = daysWithTasks.map(([day, tasksArray]) => [
    day,
    tasksArray.map(element => ({
      ...element,
      id: uuidv4() 
    }))
  ]);
 
const [updatedForm, setUpdatedForm] = useState(updatedDaysWithTasks);

  // this logic is needed to delete funcionality
 
const handleDelete = () => {
  const ss = updatedForm.map(([day, tasks]) => [day, tasks.map((el) => el.name)])
  return ss
}
  
  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Exercise List
      </Typography>

      {updatedDaysWithTasks.map(([day, taskArray]) => (
        <Box key={uuidv4()} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {day}
          </Typography>
          <List>
            {taskArray.map((el) => (
              <ListItem key={uuidv4()} sx={{ alignItems: 'flex-start' }}>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <Tooltip title={el.instruction} arrow>
                      <Box
                        sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '300px', // Adjust based on your design
                          cursor: 'pointer',
                        }}
                      >
                        {el.instruction}
                      </Box>
                    </Tooltip>
                  }
                />
                <Button sx={{ mt: 2 }} onClick={(() => console.log(handleDelete()))}><DeleteIcon/></Button>
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