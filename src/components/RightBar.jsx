import React from 'react'
import { Link } from 'react-router-dom'
import { activeUsers, suggestionsUsers, latesActivites } from '../data'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="suggestUser">
        <p>Your Suggestions</p>
        {suggestionsUsers.map(user=>{
          return(
            <div key={user.id}>
              <img src={user.img} alt="" />
              <span>{user.name}</span>
              <div className="btns">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="latestActivites">
        <p>Latest Activites</p>
        {latesActivites.map(user=>{
          return(
            <div key={user.id}>
              <img src={user.img} alt="" />
              <div className='nameAction'>
                <span>{user.name}</span>
                <span>{user.action}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="activeUser">
        <p>Active Followers</p>
        {activeUsers.map(user=>{
          return(
            <Link to={`/profile/${user.id}`} key={user.id} style={{textDecoration: "none"}}>
            <div>
              <img src={user.pp} alt="" />
              <div className="online"/>
              <span>{user.name}</span>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default RightBar