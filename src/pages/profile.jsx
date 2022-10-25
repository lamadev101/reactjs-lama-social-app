import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActionIcon } from '../components';
import { postDatas, userProfiles } from '../data';

const Profile = () => {
  const userId = useParams();
  const id = Number(userId.id);
  const [state, setState] = useState(true);

  const userData = userProfiles.filter((user)=> user.id === id);

  return (
    <>
      {userData.map(user=>{
        return(
          <div className='profile' key={user.id}>
            <div className="images">
              <img className='coverImg' src={user.cp} alt="" />
              <img className='profileImg' src={user.pp} alt="" />
            </div>
            <div className="bio">
              <div>{user.name}</div>
              <p>"{user.quote}"- <span>{user.uname}</span></p>
              {id !== 8 && <div> {state?<button className='unfollow' onClick={()=>setState(!state)}> x Unfollow</button>:<button className='follow' onClick={()=>setState(!state)}> + Follow</button>}</div>}
            </div>
          </div>
        )
      })
    }
    <div className="home" >
    <div className='postCard' style={{margin: "0 .2rem"}}>
      {postDatas.map(post=>{
        return(
          <div key={post.id} className="postItems">
            <div className="user">
              <img src={userData[0].pp} alt="" />
              <div>
                <span>{userData[0].name}</span> <br />
                <span>{post.postDate}</span>
              </div>
            </div>
            <p>{post.caption}</p>
            <img src={post.img} alt="" />
            <ActionIcon/>
          </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default Profile