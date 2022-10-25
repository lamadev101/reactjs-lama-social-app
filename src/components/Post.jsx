import { postDatas } from '../data'
import {FiMoreHorizontal} from 'react-icons/fi';
import ActionIcon from './ActionIcon';

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
            <ActionIcon/>
          </div>
        )
      })}
    </div>
  )
}

export default Post