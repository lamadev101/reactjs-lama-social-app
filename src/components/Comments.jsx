import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContextApi } from '../context/authContextApi'
import { postDatas } from '../data'

const Comments = () => {
  const {currentUser} = useAuthContextApi();

  return (
    <div className='commentSection'>
      <div className="commentBoxs">
        <img src={currentUser.pp} alt="" />
        <div className="box">
          <input type="text" placeholder='What are you think about this?...' />
          <button>Post</button>
        </div>
      </div>
      {postDatas.slice(2, 6).map(comment=>{
        return(
          <div className="comments" key={comment.id}>
            <div className="user">
              <Link to={`/profile/${comment.id}`} style={{textDecoration: "none"}}>
                <img src={comment.pp} alt="" />
              </Link>
              <div>
                <span>{comment.user}</span>
                <small>{comment.postDate}</small>
              </div>
            </div>
            <p>{comment.caption}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments