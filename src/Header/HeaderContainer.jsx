import React from 'react';
import Navbar from './../Navbar/Navbar';
import { connect } from 'react-redux';
import Header from './Header';
import { AuthMeThunk, AutnloginAC, logoutThunk } from './../Redux/AuthLoginReduser';
import { userApi } from '../DAL/Api';

class HeaderApi extends React.Component {

render(){
    
    return <Header {...this.props}  dataSet={this.props.dataSet}/>
    
       
    
}

}
const mapStateToProps =(state) =>({
   
    login:state.AuthLoginReduser.login,
   
    isAuth:state.AuthLoginReduser.isAuth
})

const HeaderContainer = connect(mapStateToProps,{AutnloginAC, AuthMeThunk, logoutThunk})(HeaderApi)
export default HeaderContainer
