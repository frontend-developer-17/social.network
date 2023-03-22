

import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfileUser, profileUserThunk, profileStatusThunk, updateStatus, savePhotos, saveProfileThunk } from './../../Redux/ProfileReduser';
import {  useParams } from 'react-router-dom';

import { RedirectLogin } from '../../hoc/redirect';
import { compose } from 'redux';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    profileStatus: state.profilePage.profileStatus,
    id:state.AuthLoginReduser.id,
    isAuth:state.AuthLoginReduser.isAuth,
})

function ComponentWitchRouterProp(props) {
   let params = useParams()
    useEffect(() => {
        let profileId = params.profileId
       
        if (!profileId) {
              profileId =props.id
  }
         props.profileUserThunk(profileId)
        props.profileStatusThunk(profileId)
    },[params])
    return <Profile {...props} isOwner={!params.profileId} />
}
const UserProfile = compose(
  connect(mapStateToProps, { setProfileUser, profileUserThunk, profileStatusThunk, updateStatus, savePhotos, saveProfileThunk }),
    RedirectLogin,
    
)(ComponentWitchRouterProp)

export default UserProfile
