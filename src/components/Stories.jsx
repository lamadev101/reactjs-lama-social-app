import React from 'react'
import { useAuthContextApi } from '../context/authContextApi'
import { storyItems } from '../data'

const Stories = () => {
  const {currentUser} = useAuthContextApi();

  return (
    <div className='story'>
      <div className="container">
      <div className="cardItem">
        <img src={currentUser?.pp} alt="" />
        <span>{currentUser?.name}</span>
      </div>
        {storyItems.map(story=>{
          return(
            <div key={story.id} className="cardItem">
              <img src={story.img} alt="" />
              <span>{story.user}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stories