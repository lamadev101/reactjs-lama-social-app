import React from 'react'
import { Post, Stories } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Post/>
    </div>
  )
}

export default Home