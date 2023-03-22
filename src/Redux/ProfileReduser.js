import { userApi } from "../DAL/Api"

const addPost = "addPost"
const updateNewPostText = "updateNewPostText"
const user ="user"
const getStatus ="getStatus"
const setPhotos ="setPhotos"
let initialState = {
  postInfo: [
    { id: "1", message: "Hey, why nobody love me?", likesCount: "5" },
    { id: "2", message: "Hello", likesCount: "10" },
    { id: "3", message: "l go to walk", likesCount: "23" },
    { id: "4", message: "Hi", likesCount: "46" },
  ],
  newPost: "it-kamasutra",
  userProfile:null,
  profileStatus:"",

}
const ProfileReduser = (state = initialState , action) =>{

   switch (action.type) {
    case addPost:
        let newPost = {
            id: 5,
            message: state.newPost,
            likesCount: 0,
          }
         
          return {
            ...state,
            postInfo:[...state.postInfo,newPost],
           newPost: ""

          }
        
        case updateNewPostText:
         
         
         return {
          ...state,
          newPost: action.text
         }
        case user:
            
           return {...state,
           userProfile: action.profileUser
       }

      case getStatus:
        return{...state,
            profileStatus:action.status 
      }   
          
        case setPhotos:
         
          return{ ...state, userProfile:{...state.userProfile, photos:action.photos}  
}  
        
    default:
        return state

   } 
    
   
   
   
    
}
export const updateNewPostTextActionCreater = (text) =>{
    return {type:updateNewPostText, text:text}
  }
  
  export const addPostActionCreater = () => ({
    type: addPost
  })
export const setProfileUser = (profileUser) =>({
    type:user, profileUser
})
export const getProfileStatus = (status) =>({
    type:getStatus,status
})
export const savePhotosAC = (photos) =>({
  type:setPhotos,photos
})

export const profileUserThunk =(profileId) =>
    
   async (dispatch) =>{
    try {
      let response = await  userApi.ProfileUser(profileId)
      dispatch(setProfileUser(response.data))
         
    } catch (error) {
      alert(error)
    }
     
       
    }


export const profileStatusThunk = (userId)=>
    async(dispatch)=>{
       let response = await userApi.GetStatus(userId)
       dispatch(getProfileStatus(response.data))
            
        
    }

export const updateStatus = (status)=>
    async (dispatch)=>{
        
        let response = await userApi.PutStatus(status)
            if (response.data.resultCode===0) {
                dispatch(getProfileStatus(status))
            }
           
        
    
}
export const saveProfileThunk = (profile,setError)=>
    async (dispatch,getState)=>{
      debugger
     const userId= getState().AuthLoginReduser.id

        
        let response = await userApi.SaveProfile(profile)
        debugger
            if (response.data.resultCode===0) {
              dispatch(profileUserThunk(userId))
            } else{setError('server',{message:response.data.messages})

          }
           
        
    
}
export const savePhotos =(file)=>async(dispatch)=>{
 
  let response = await userApi.SavePhotos(file)
 dispatch(savePhotosAC(response.data.data.photos))
}


export default ProfileReduser


