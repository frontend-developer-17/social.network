import { userApi } from "../DAL/Api"


const Autnlogin = "Autnlogin"
const addCaptcha = "addCaptcha"

let initialState = {
 email:null,
 id:null,
 login:null,
 isAuth:false,
 captcha:""

}
const AuthLoginReduser = (state = initialState , action) =>{

   switch (action.type) {
    case Autnlogin:
     
        return {
            ...state,
          ...action.data,
          captcha:""
          }

          case addCaptcha:
            return{
         ...state, captcha:action.captcha,
         
            }
     default:
        return state

   } 
    
   
   
   
    
}
export const AutnloginAC = (email,id,login, isAuth) =>{
 
    return {type:Autnlogin, data:{email,id,login, isAuth }}
  }
  export const GetCaptchaUrl = (captcha)=>({
type:addCaptcha, captcha
  })

export const AuthMeThunk =() => async (dispatch)=>{
 let response = await userApi.AuthMe()
     if (response.data.resultCode ===0) {
            let{email,id,login } = response.data.data
            dispatch(AutnloginAC(email,id,login,  true))
        }
    }

export const LoginThunk = (email, password, rememberMe,setError, captcha)=>async (dispatch)=>{
   let response = await userApi.Login(email, password, rememberMe, captcha)

   if (response.data.resultCode ===0) {
    
      dispatch(AuthMeThunk())
     }else{setError('server',{message:response.data.messages})

     }if (response.data.resultCode ===10) {
        debugger
        let response = await userApi.Captcha()
        debugger
        dispatch(GetCaptchaUrl(response.data.url))
     }
  
  }


export const logoutThunk =() =>
 
async (dispatch)=>{
   let response = await userApi.Logout()
       if (response.data.resultCode ===0) {
              dispatch(AutnloginAC(null,null,null, false))
          }
    }




export default AuthLoginReduser




