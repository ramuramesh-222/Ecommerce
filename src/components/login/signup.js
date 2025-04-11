import React, { useState } from 'react'
import './logsign.css'
import sopImg from '../../asset/login.jpg'

function Signup() {
  const [valuesignup, setValuesignup] = useState({ name: '', username: '', email: '', password: '' })
  const signupvalue = (e) => {
    let name = e.target.name.trim()
    let value = e.target.value.trim()

    setValuesignup({ ...valuesignup, [name]: value })
  }
  const submitsignup = (e) => {
    e.preventDefault()
    console.log(valuesignup);

    // const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(valuesignup)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className='inpu-form'>
      <div className='inpu-vector'>
        <img src={sopImg} className="vert-move" />
      </div>
      <div className='inpu-form-val'>
        <form onSubmit={submitsignup}>
          <input type='text' onChange={signupvalue} name='name' placeholder='Name' />
          <input type='email' onChange={signupvalue} name='email' placeholder='Email' />
          <input type='text' onChange={signupvalue} name='username' placeholder='User Name' />
          <input type='password' onChange={signupvalue} name='password' placeholder='Password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
