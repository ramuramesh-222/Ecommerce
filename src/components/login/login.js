import React, { useState } from 'react'
import './logsign.css'
import sopImg from '../../asset/login.jpg'

function Login() {
  const [valueinpu, setValueinpu] = useState({ username: '', password: '' })

  const loginvalue = (e) => {
    let uname = e.target.name.trim()
    let pass = e.target.value.trim()
    setValueinpu({ ...valueinpu, [uname]: pass });
  }

  const loginsubmitvalue = async(e) => {
    e.preventDefault()

    await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(valueinpu)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error('Login error:', err.message));
      
  }

  return (
    <div className='inpu-form'>
      <div className='inpu-vector'>
        <img src={sopImg} className="vert-move" />

      </div>
      <div className='inpu-form-val'>
        <form onSubmit={loginsubmitvalue}>
          <label><strong>User Name</strong></label>
          <input type='text' name='username' onChange={loginvalue} />
          <label><strong>Password</strong></label>
          <input type='password' name='password' onChange={loginvalue} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
