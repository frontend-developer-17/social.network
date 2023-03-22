import Profile from './Profile/Content/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from './App.module.css'
//import DialogContainer from './Profile/Messanger/DialogContainer';
//import UserContainer from './user/userContainer';
import HeaderContainer from './Header/HeaderContainer';
import UserProfile from './Profile/Content/ProfileContainer';
import LoginContainer from './logination/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialSuccessThunk } from './Redux/InitialasedReduser';
import Preloader from './image/preloader';
import React, { useEffect, Suspense } from 'react';
import Navbar from './Navbar/Navbar';

const UserContainer = React.lazy(() => import('./user/userContainer'));
const DialogContainer = React.lazy(() => import('./Profile/Messanger/DialogContainer'));
const App = (props) => {
 
 useEffect(()=>{
  props.initialSuccessThunk()
 },[])
if (!props.initial) {
 
  return <Preloader/>
}

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <div className={s.wrapper_content}>
        <HeaderContainer />
        <Navbar/>
        <div className={s.content}>
          <Routes>
          <Route exact path='/social.network/' element={<UserProfile/>} />

          <Route exact path='/profile/:profileId?' element={<UserProfile/>} />

           
            <Route path='/dialog/' element={<DialogContainer/>} />  
            <Route path='/user/' element={<UserContainer/>} />  
            <Route path='/login/' element={<LoginContainer/>} />  
            
            
           

           
          </Routes>


        </div>



      </div>
    </Router>
    </Suspense>
  );
}

const mapStateToPtops =(state)=>({
initial:state.Initialaised.initialAuthMe
})
export default compose(
  connect(mapStateToPtops,{initialSuccessThunk} )
  
)(App)

//<Route path='/profile2/:profileId?' element={<Profile2Container/>} />  
//<Route path='/user2/' element={<User2Container/>} />  