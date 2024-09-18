import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormControl, InputLabel, Select, MenuItem, Box, List, ListItem, ListItemText, Button, Typography } from '@mui/material';

function ExerciesList({handleSelectChange,exData,selectDayBtn}) {
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
      <List>
        {exData.map((el) => (
          <ListItem key={uuidv4()} sx={{ alignItems: 'flex-start', mb: 2 }}>
            <ListItemText
              primary={el.name}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
                    Instructions:
                  </Typography>{" "}
                  {el.instructions}
                </>
              }
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => selectDayBtn(el.name, el.instructions)}
              sx={{ ml: 2 }}
            >
              Select Day
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ExerciesList
