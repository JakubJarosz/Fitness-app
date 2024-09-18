import React from 'react'
import { Modal, Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function ExerciesPopUp({popup, setPopup, day, setDay, addExerciseBtn}) {
  const handleClose = () => setPopup(false);
  return (
    <div>
        {popup ?   <div>
            <select name="day" value={day} required onChange={((e) => setDay(e.target.value))}>
              <option value=""  hidden>
                Choose day
              </option>
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
            <option value="sunday">sunday</option>
           </select>
           <button onClick={addExerciseBtn}>Add exercise</button>
       </div> : null}
   <Modal
        open={popup}
        onClose={handleClose}
        aria-labelledby="add-exercise-modal"
        aria-describedby="add-exercise-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Choose Day</InputLabel>
            <Select
              name="day"
              value={day}
              required
              onChange={(e) => setDay(e.target.value)}
              label="Choose Day"
            >
              <MenuItem value="" disabled>
                Choose day
              </MenuItem>
              <MenuItem value="monday">Monday</MenuItem>
              <MenuItem value="tuesday">Tuesday</MenuItem>
              <MenuItem value="wednesday">Wednesday</MenuItem>
              <MenuItem value="thursday">Thursday</MenuItem>
              <MenuItem value="friday">Friday</MenuItem>
              <MenuItem value="saturday">Saturday</MenuItem>
              <MenuItem value="sunday">Sunday</MenuItem>
            </Select>
          </FormControl>

          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={addExerciseBtn}>
              Add Exercise
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ExerciesPopUp
