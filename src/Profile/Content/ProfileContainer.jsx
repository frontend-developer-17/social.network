

import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfileUser, profileUserThunk, profileStatusThunk, updateStatus } from './../../Redux/ProfileReduser';
import { useNavigate, useParams } from 'react-router-dom';

import { RedirectLogin } from '../../hoc/redirect';
import { compose } from 'redux';
import { useEffect } from 'react';
import Preloader from '../../image/preloader';


const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    profileStatus: state.profilePage.profileStatus,
    id:state.AuthLoginReduser.id,
    isAuth:state.AuthLoginReduser.isAuth,
    
    

})



//let profUser = witchRouter

//function witchRouter(Component) {

function ComponentWitchRouterProp(props) {
   
  
   
   
    
    let params = useParams()
    useEffect(() => {
        let profileId = params.profileId
       
        if (!profileId) {
           
              profileId =props.id
             
               
               

            

           
        }
        props.profileUserThunk(profileId)
        props.profileStatusThunk(profileId)
    },[])
    // return (
    //    <Component {...props} {...params} />
    // )

    return <Profile {...props} />
}
//}
//let Redirect = RedirectLogin(ProfileContainer)

/*function witchRouter(Component) {

    function ComponentWitchRouterProp(props) {
        let params = useParams()
        return (
            <Component {...props} { ...params } />
        )
    }
    return ComponentWitchRouterProp
}*/

const UserProfile = compose(

    connect(mapStateToProps, { setProfileUser, profileUserThunk, profileStatusThunk, updateStatus }),
    RedirectLogin,
    
)(ComponentWitchRouterProp)


//const UserProfile = connect(mapStateToProps, { setProfileUser, profileUserThunk })(ProfileContainer)
export default UserProfile
