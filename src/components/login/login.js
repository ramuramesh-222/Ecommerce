import React, { useState } from 'react'
import './logsign.css'
import sopImg from '../../asset/login.jpg'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [valueinpu, setValueinpu] = useState({ username: '', password: '' })
  const navigate = useNavigate(

  )
  const loginvalue =(e)=>{
    let name = e.target.name.trim()
    let value = e.target.value.trim()
    setValueinpu({...valueinpu,[name]:value})
  }

  const loginsubmitvalue = async (e) => {
    e.preventDefault();
    const {username , password } = valueinpu

    if(!username || !password){
      alert('Please fill in both username and password.')
      return;
    }

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valueinpu),
      });

      const data = await response.json();

      if (data && data.token) { 
        console.log('Login successful:', data);
        setValueinpu({ username: '', password: '' });
        alert('login Successfully');
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err.message);
      alert('Something went wrong. Please try again.');
    }
  };
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
