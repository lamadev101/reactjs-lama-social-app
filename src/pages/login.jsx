import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContextApi } from '../context/authContextApi'

const Login = () => {
  const {UserLogin} = useAuthContextApi();
  const navigate = useNavigate();

  const handleLogin = () =>{
    UserLogin();
    navigate("/");
  }
  return (
    <div className='login'>
      <div className="loginCard">
        <div className="left">
          <h1>Lama Social</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In unde ullam ut quidem quis illo amet fugiat perspiciatis magni impedit.</p>
          <span>Does not have an account?</span>
          <Link to="/register" style={{color: "cyan", fontSize: "18px", fontWeight: "bold"}}>Register Here</Link>
        </div>
        <div className="right">
          <h3>Login</h3>
          <form action="">
            <input type="email" placeholder='Username or Email' />
            <input type="password" placeholder='Password' />
            <button  onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login