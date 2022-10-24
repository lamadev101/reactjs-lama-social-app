import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContextApi } from '../context/authContextApi'
import { BsFillChatQuoteFill, BsSunFill, BsSearch, BsBell, BsFillMoonStarsFill, BsPersonCircle} from 'react-icons/bs'
import {BiHomeHeart} from 'react-icons/bi';

const Navbar = () => {
  const {currentUser, dark, setDark} = useAuthContextApi();
  return (
    <div className={dark ? "navbar darkTheme" : "navbar"}>
      <div className="navLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className='logo'>LamaSocial</span>
        </Link>
        <div className="icons">
          <BiHomeHeart className='icon'/>
          {dark ?<BsSunFill onClick={()=>setDark(false)} className='icon'/>:<BsFillMoonStarsFill onClick={()=>setDark(true)} className='icon'/>}
          <div className='search'>
            <BsSearch className='icon'/>
            <input type="search" />
          </div>
        </div>
      </div>
      <div className="navRight">
        <div className="icons">
          <BsPersonCircle className='icon'/>
          <BsBell className='icon'/>
          <span className='notify'>12</span>
          <BsFillChatQuoteFill className='icon'/>
        </div>
        <Link to="/profile/8" style={{textDecoration:"none"}}>
        <div className="user">
          <img src={currentUser.pp} alt="" />
          <span>{currentUser.username}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar