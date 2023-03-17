
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/ProfileReduser';
import Post from './Post';




/*const PostContainer = (props) => {


  

 
  return (
    <MyContext.Consumer>
      {(Store) =>{
       
      let addPostClick = () => {
        Store.dispatch(addPostActionCreater())
    }
    
      let newPostChange = (text) => {
        Store.dispatch(updateNewPostTextActionCreater(text))
      }
       return <Post addPostClick={addPostClick} newPostChange={newPostChange} postInfo={Store.getState().profilePage.postInfo} newPost={Store.getState().profilePage.newPost} />
      

      }
}
    </MyContext.Consumer>
  )
}*/

const mapStateToProps = (state) =>{
  return { 
    postInfo: state.profilePage.postInfo,
    newPost:state.profilePage.newPost
  }

}
const mapDispatchToProps = (dispatch)=>{
 return  {
  newPostChange: (text) =>{
    dispatch(updateNewPostTextActionCreater(text))
   },
   addPostClick:()=>{
    dispatch(addPostActionCreater())
   }

}
}

const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post)

export default PostContainer