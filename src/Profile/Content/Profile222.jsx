
import  React  from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
class Profile222Api extends React.Component {
    componentDidMount = () =>{
        
       
        
    }
    render(){
        debugger
        return <Profile {...this.props}/>
        
           
        
    }
    
    }
    const mapStateToProps =(state) =>({
        userProfile:state.profilePage.userProfile,
        login:state.AuthLoginReduser.login,
   
    isAuth:state.AuthLoginReduser.isAuth
      
    })
    
    const ProfileContainerhy = connect(mapStateToProps,{})(Profile222Api)
    export default ProfileContainerhy
    

