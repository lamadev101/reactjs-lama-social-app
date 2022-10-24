import React from 'react'
import { postDatas } from '../data'
import {FiMoreHorizontal} from 'react-icons/fi';

const Post = () => {
  return (
    <div className='postCard'>
      {postDatas.map(post=>{
        return(
          <div key={post.id} className="postItems">
            <div className="user">
              <img src={post.pp} alt="" />
              <div>
                <span>{post.user}</span> <br />
                <span>{post.postDate}</span>
                <FiMoreHorizontal className='icon'/>
              </div>
            </div>
            <p>{post.caption}</p>
            <img src={post.img} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Post