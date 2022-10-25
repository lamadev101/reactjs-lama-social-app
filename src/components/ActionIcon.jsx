import React, { useState } from 'react'
import {BsFillHeartFill, BsHeart} from 'react-icons/bs'
import {FaRegComments, FaComments} from 'react-icons/fa'
import {HiOutlineShare, HiShare} from 'react-icons/hi'
import Comments from './Comments'

const ActionIcon = () => {
  const [clickedHeart , setClickedHeart] = useState(true);
  const [clickedComment , setClickedComment] = useState(true);
  const [clickedShare , setClickedShare] = useState(true);
  return (
    <>
      <div className='actionIcon'>
        <span>{clickedHeart ?
          <BsHeart className='icon' onClick={()=>setClickedHeart(false)}/>:
        <BsFillHeartFill className='icon' onClick={()=>setClickedHeart(true)}/>}
        {clickedHeart ? "99" : "100"} Likes
        </span>
        <span>{clickedComment ? 
          <FaRegComments className='icon' onClick={()=>setClickedComment(false)}/>:
          <FaComments className='icon' onClick={()=>setClickedComment(true)}/>}
          4 Comments
        </span>
        <span>{clickedShare ? 
        <HiOutlineShare className='icon' onClick={()=>setClickedShare(false)}/>:
        <HiShare className='icon' onClick={()=>setClickedShare(true)}/>}
        20 Shares
        </span>
      </div>
      {!clickedComment && <Comments/>}
    </>
  )
}

export default ActionIcon