import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="registerCard">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde ullam ut quidem quis illo amet fugiat perspiciatis magni impedit.</p>
          <span>Already have an account?</span>
          <Link to="/login" style={{color: "teal", fontSize: "18px", fontWeight: "bold"}}>Login</Link>
        </div>
        <div className="right">
          <h3>Register to Lama Social</h3>
          <form action="">
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register