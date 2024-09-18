import React, {useState} from 'react'
import { TextField, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem, Button, Box, Typography } from '@mui/material';


function ParamForm({createParameters,formData,setFormData}) {

  return (
      <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create Parameters
      </Typography>
      <form onSubmit={createParameters}>
        {/* Age Field */}
        <TextField
          label="Age"
          type="number"
          fullWidth
          margin="normal"
          inputProps={{ min: 1, max: 100 }}
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
        />

        {/* Gender Radio Buttons */}
        <FormControl component="fieldset" margin="normal" fullWidth>
          <Typography variant="body1" gutterBottom>
            Gender:
          </Typography>
          <RadioGroup
            row
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        {/* Goal Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel>What is your goal?</InputLabel>
          <Select
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
          >
            <MenuItem value="lose">Lose weight</MenuItem>
            <MenuItem value="gain">Gain weight</MenuItem>
            <MenuItem value="maintain">Maintain weight</MenuItem>
          </Select>
        </FormControl>

        {/* Height Field */}
        <TextField
          label="Height in cm"
          type="number"
          fullWidth
          margin="normal"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
          required
        />

        {/* Weight Field */}
        <TextField
          label="Weight in kg"
          type="number"
          fullWidth
          margin="normal"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default ParamForm
