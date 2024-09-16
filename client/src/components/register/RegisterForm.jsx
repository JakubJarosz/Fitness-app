import React, {useState} from 'react'


function RegisterForm({registerUser,formData,setFormData}) {
 
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm
