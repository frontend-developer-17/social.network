import { userApi } from "../DAL/Api"
import { userObjectArray } from "../helpers/userHelpers"

const Fullowad = "Fullowad"
const UnFullowad = "UnFullowad"
const setUser = "setUser"
const currentNumber = "currentNumber"
const totalPage = "totalPage"
const funging ="funging"
const isFetching = "isFetching"
const initialState = {
    user: [ ],
    totalPage:0,
    pageSize:5,
    currentPage:1,
    funging:false,
    userDisable:[],
    
}


const UserReduser = (state = initialState, action) => {
    switch (action.type) {
       
      
        
       
       
        case Fullowad:
           
            return {
                ...state,
                user: userObjectArray(state.user, action.userId,"id", {followed: true})
            }
        case UnFullowad:
           
            return {
                ...state,
                user: userObjectArray(state.user, action.userId,"id", {followed: false})
            }

            case setUser:{

            return {
                ...state,
                 user: [...action.user]
            }

        }
        case currentNumber:{
            return{
                ...state,
                currentPage:action.number
            }
        }
        case totalPage:{
            return{
                ...state,
                totalPage:action.page
            }
        }
         case funging:{
            return{
                ...state,
                funging:action.respons
            }
         }

        case isFetching:{
            return{
                ...state,
                userDisable: action.FetchDisable
                ?[...state.userDisable,action.userId]
                :state.userDisable.filter(id=>id!=action.userId)
            }
                
               }

        default:
            return state
    }
}


export const follow = (userId) => ({
    type: Fullowad, userId
})
export const unfollow = (userId) => ({
    type: UnFullowad, userId
})

export const setUsers = (user) => ({
    type: setUser, user

})
 export const currentNumPage = (number) =>({
    type:currentNumber, number
 })
 export const total = (page) =>({
type:totalPage, page
 })
 export const loading= (respons) =>({
    type:funging,respons
 })
 export const todleIsFetching= (FetchDisable, userId) =>({
    type:isFetching,FetchDisable, userId
 })

export const getUserThunk =(totalUser,pageSize ) =>{
    return (dispatch) =>{
        dispatch(loading(true))
        userApi.getUser(totalUser,pageSize)
      .then(data => {
        dispatch(loading(false))
            dispatch(setUsers(data.items))
            dispatch(total(data.totalCount))

        }) 
    }
}


const followUnfollowSusses= async (userId,dispatch,action, apiMethod)=>  {
dispatch(todleIsFetching(true, userId))


let response = await apiMethod(userId)
 if (response.data.resultCode === 0) {
        
        dispatch(action(userId))
        
    }
    dispatch(todleIsFetching(false, userId))
}







export const unfollowUserThunk =(userId) =>{
  
  
    return (dispatch) =>{
       
       
       const action = unfollow
       const apiMethod=    userApi.unfollow
       
       followUnfollowSusses(userId, dispatch, action, apiMethod   )
    }
}

export const followUserThunk =(userId) =>{
    return (dispatch) =>{
        const action = follow
        const apiMethod= userApi.follow
       followUnfollowSusses(userId, dispatch, action, apiMethod   )

    }
}

export default UserReduser