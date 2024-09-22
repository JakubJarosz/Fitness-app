import React from 'react'
import Navbar from 'src/components/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import ExercisePlan from 'src/components/reusable-components/ExercisePlan'
import {
  Button
} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import ParametersDisplay from 'src/components/edit-profile/ParametersDisplay';

function EditProfilePage() {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
      <ExercisePlan/>
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        sx={{ mt: 2 }}
        onClick={(() => navigate("/create-plan"))}
      >
        Edit your workout plan
      </Button>
      <ParametersDisplay/>
    </div>
  )
}

export default EditProfilePage
