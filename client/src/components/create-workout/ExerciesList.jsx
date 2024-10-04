import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormControl, InputLabel, Select, MenuItem, Box, List, ListItem, ListItemText, Button, Typography, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function ExerciesList({handleSelectChange,exData,selectDayBtn}) {
  
  const [open, setOpen] = useState(false);
  const [instructionText, setInstructionText] = useState("");

  const handleClickOpen = (instructions) => {
    setInstructionText(instructions);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInstructionText("");
  };
  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
    {/* Muscle Group Selection */}
    <FormControl fullWidth sx={{ mb: 4 }}>
      <InputLabel>Muscle Group</InputLabel>
      <Select
        label="Muscle Group"
        name="muscle"
        onChange={handleSelectChange}
      >
        <MenuItem value="abdominals">Abdominals</MenuItem>
        <MenuItem value="abductors">Abductors</MenuItem>
        <MenuItem value="adductors">Adductors</MenuItem>
        <MenuItem value="biceps">Biceps</MenuItem>
        <MenuItem value="calves">Calves</MenuItem>
        <MenuItem value="chest">Chest</MenuItem>
        <MenuItem value="forearms">Forearms</MenuItem>
        <MenuItem value="glutes">Glutes</MenuItem>
        <MenuItem value="hamstrings">Hamstrings</MenuItem>
        <MenuItem value="lats">Lats</MenuItem>
        <MenuItem value="lower_back">Lower Back</MenuItem>
        <MenuItem value="middle_back">Middle Back</MenuItem>
        <MenuItem value="neck">Neck</MenuItem>
        <MenuItem value="quadriceps">Quadriceps</MenuItem>
        <MenuItem value="traps">Traps</MenuItem>
        <MenuItem value="triceps">Triceps</MenuItem>
      </Select>
    </FormControl>

    {/* Exercise List */}
    <Grid container spacing={2}>
      {exData.map((el) => (
        <Grid item xs={12} sm={4} key={uuidv4()}>
          <Box
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              display: 'flex',
              height: "150px",
              flexDirection: 'column',
              alignItems: 'center', // Center align items horizontally
              mb: 2,
              textAlign: 'center' // Center align text
            }}
          >
            <ListItemText
              primary={<Typography variant="h6">{el.name}</Typography>}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.secondary" sx={{ fontWeight: 700, cursor: 'pointer' }} onClick={() => handleClickOpen(el.instructions)}>
                    Instructions:
                  </Typography>{" "}
                </>
              }
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => selectDayBtn(el.name, el.instructions)}
              sx={{ mt: 2 }}
            >
              Select Day
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Instructions</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{instructionText}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </Box>
  )
}

export default ExerciesList
