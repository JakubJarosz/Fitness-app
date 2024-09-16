import React, {useState} from 'react'
import ParamForm from '../components/create-parameters/ParamForm'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function CreateParametersPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   age: "",
   gender: "",
   goal: "",
   height: "",
   weight: ""
  })
   const createParameters = async (e) => {
     e.preventDefault();
     const {age, gender, goal, height, weight} = formData;
     try {
         const {data} = await axios.post("/create-parameters", {age,gender,goal,height,weight});
         if (data.error) {
          toast.error(data.error)
         } else {
           setFormData({});
           toast.success("Parameters created");
           navigate("/")
         }
     } catch (err) {
       console.log(err)
     }
   }
  return (
    <div>
      <ParamForm
      createParameters={createParameters}
      formData={formData}
      setFormData={setFormData}
      />
    </div>
  )
}

export default CreateParametersPage
