import React, {useState} from 'react'
import { useSelector} from "react-redux"
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';


function ExercisePlan() {
    const exercies = useSelector((state) => state.authuser.user.exercies);
    const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const [open, setOpen] = useState(false);
    const [selectedInstruction, setSelectedInstruction] = useState('');
  
    const handleOpen = (instruction) => {
      setSelectedInstruction(instruction);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedInstruction('');
    };
  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Weekly Exercise Plan
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Exercise</TableCell>
              <TableCell>Instructions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {daysOrder.map((day) => (
              <TableRow key={day}>
                <TableCell>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </TableCell>
                <TableCell>
                  {exercies[day] && exercies[day].length > 0
                    ? exercies[day].map((exercise, index) => (
                        <div key={index}>
                          {exercise.name}
                          {index < exercies[day].length - 1 && <Divider sx={{ my: 1 }} />}
                        </div>
                      ))
                    : 'Rest day'}
                </TableCell>
                <TableCell>
                  {exercies[day] && exercies[day].length > 0
                    ? exercies[day].map((exercise, index) => (
                        <div key={index}>
                          <Button
                            variant="text"
                            color="primary"
                            onClick={() => handleOpen(exercise.instruction)}
                          >
                            View Details
                          </Button>
                          {index < exercies[day].length - 1 && <Divider sx={{ my: 1 }} />}
                        </div>
                      ))
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal to display full instructions */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Exercise Instructions</DialogTitle>
        <DialogContent>
          <Typography>{selectedInstruction}</Typography>
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

export default ExercisePlan
