import s from './Profile.module.css'
import ContentInfo from './ContentInfo/ContentInfo'
import PostContainer from './Posts/PostContainer'




const Profile = (props) => {

    return (
        <div className={s.content}>
           <ContentInfo {...props}userProfile={props.userProfile} isOwner={props.isOwner}   />
           
         <PostContainer   />
        </div>
    )
}
export default Profile