import React, { useState } from 'react'
import './logsign.css'
import sopImg from '../../asset/login.jpg'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [valuesignup, setValuesignup] = useState({ name: '', username: '', email: '', password: '' })
  const navigate = useNavigate()
  
  const signupvalue = (e) => {
    let name = e.target.name.trim()
    let value = e.target.value.trim()

    setValuesignup({ ...valuesignup, [name]: value })
  }


  const submitsignup = async (e) => {
    e.preventDefault();
    const {name,username,email,password} = valuesignup;
    if(!name||!username||!email||!password){
      alert('Please fill in all inputs.');
      return;
    }
    try{
      const responce = await fetch('https://fakestoreapi.com/users',{
        method:'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(valuesignup),
      });

      const data = await responce.json();

      if(data && data.id){
        alert('register successfully')
        navigate('/login')
      }else{
        alert('something wrong try again')
      } 
    }catch(err){
      console.error(err.message)
      
    }

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
