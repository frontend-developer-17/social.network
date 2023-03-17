import { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
const mapStateToProps =(state)=>({
    isAuth:state.AuthLoginReduser.isAuth
})
export const RedirectLogin =(Component) =>{
    let Redirect = (props) =>{
        if (!props.isAuth)  return <Navigate to="/login/"/>
        return <Component{...props}/>
    }


    let redirectConnect = connect(mapStateToProps)(Redirect)
return redirectConnect
}


