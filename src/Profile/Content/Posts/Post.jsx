
import s from './Post.module.css'
import React from 'react';


const PostInfo = (props) => {
  return (
    <div className="">
      <div><img src="https://automotive-heritage.com/upload/bmw_m8_competition_coupe_1.jpeg" alt="" className={s.imgPost} />{props.message}</div>
       <div className={s.like}> like:{props.likesCount}</div>
    </div>
  )

}

const Post = (props) => {
 
  let posts = props.postInfo.map(p => <PostInfo key={p.id} message={p.message} likesCount={p.likesCount} />)

  
  
  let addPostClick = () => {

   
    props.addPostClick()

  }

  let newPostChange = (e) => {
    let text = e.target.value
    
    props.newPostChange(text)
  }

  return (
    <div className={s.postBlock}>
      <div  >
        <h3>My posts</h3>
        <textarea name="" id="" cols="90" rows="3" onChange={newPostChange} value={props.newPost}  />

        <input onClick={addPostClick} type="button" value="Send" className={s.button}/>

      </div>
      {posts}
    </div>
  )
}
export default Post