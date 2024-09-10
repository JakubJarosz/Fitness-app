import React from 'react'



function ParamForm() {
 
  
  return (
    <div>
      <form>
        <label>Age:</label>
        <input type="number"   min="1" max="100"  required/><br></br>
        <label>Gender:</label>
    <input type="radio" name="gender" value="male"  required/>
    <label>Male</label>
    <input type="radio" name="gender" value="female" />
    <label>Female</label><br></br>
        <label>What is your goal?</label>
        <select name="goal"  required>
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="maintain">Maintain weight</option>
        </select><br></br>
        <label>Height in cm:</label>
        <input type="number"  required/>
        <label>Weight in kg:</label>
        <input type="number"  required/><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ParamForm
