import React from 'react'
import axios from 'axios'


function ParamForm() {
  return (
    <div>
      <form>
        <label>Age:</label>
        <input type="number" id="age" name="age" min="1" max="100"/><br></br>
        <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male"/>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female"/>
    <label for="female">Female</label><br></br>
        <label>What is your goal?</label>
        <select name="goal">
            <option value="lose">Lose weight</option>
            <option value="gain">Gain weight</option>
            <option value="maintain">Maintain weight</option>
        </select><br></br>
        <label>Height in cm:</label>
        <input type="number" name="height"/>
        <label>Weight in kg:</label>
        <input type="number" name="weight"/>
      </form>
    </div>
  )
}

export default ParamForm
