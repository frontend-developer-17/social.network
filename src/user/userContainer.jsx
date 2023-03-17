import { connect } from "react-redux";
import User from "./user";
import axios from "axios"
import React from 'react';
import loader from '../image/loader.png'
import s from './user.module.css'
import { follow, unfollow, setUsers, currentNumPage, total, loading, todleIsFetching, getUserThunk, unfollowUserThunk, followUserThunk } from './../Redux/UserReduser';
import Preloader from "../image/preloader";





class UserApi extends React.Component {

    componentDidMount() {
        this.props.getUserThunk(this.props.total,this.props.pageSize)


      
    }

 currentNumber = (pageNumber) => {
     this.props.currentNumPage(pageNumber)
     this.props.getUserThunk(pageNumber,this.props.pageSize)
 }
 render() {
     return <>
         {this.props.funging ? <Preloader/>: null}
         <User
             currentNumber={this.currentNumber}
             totalPage={this.props.totalPage}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             user={this.props.user}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             todleIsFetching={this.props.todleIsFetching}
             userDisable={this.props.userDisable}
             unfollowUserThunk={this.props.unfollowUserThunk}
             followUserThunk={this.props.followUserThunk}
           

         />
     </>
 }

}












const mapStateToProps = (state) => ({
 user: state.userPage.user,
 totalPage: state.userPage.totalPage,
 pageSize: state.userPage.pageSize,
 currentPage: state.userPage.currentPage,
 funging: state.userPage.funging,
 userDisable:state.userPage.userDisable
})


const UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    currentNumPage,
    total,
    loading,
    todleIsFetching,
    getUserThunk,
    unfollowUserThunk,
    followUserThunk

})(UserApi)
export default UserContainer