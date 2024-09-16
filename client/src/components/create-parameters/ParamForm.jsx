import React, {useState} from 'react'


function ParamForm({createParameters,formData,setFormData}) {

  return (
    <div>
      <form onSubmit={createParameters}>
        <label>Age:</label>
        <input type="number"   min="1" max="100"  onChange={((e) => setFormData({...formData, age: e.target.value}))} required/><br></br>
        <label>Gender:</label>
    <input type="radio" name="gender" value="male" onChange={((e) => setFormData({...formData, gender: e.target.value}))} required/>
    <label>Male</label>
    <input type="radio" name="gender" value="female" onChange={((e) => setFormData({...formData, gender: e.target.value}))}/>
    <label>Female</label><br></br>
        <label>What is your goal?</label>
        <select name="goal"  required onChange={((e) => setFormData({...formData, goal: e.target.value}))}>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="maintain">Maintain weight</option>
        </select><br></br>
        <label>Height in cm:</label>
        <input type="number"  required onChange={((e) => setFormData({...formData, height: e.target.value}))}/>
        <label>Weight in kg:</label>
        <input type="number"  required onChange={((e) => setFormData({...formData, weight: e.target.value}))}/><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ParamForm
