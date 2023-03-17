import axios from "axios"



const instanse = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "b16ba8b6-fdf0-48ee-a4bc-858bb436ced4"
      }
    
})


export const userApi ={
 
  getUser(pageNumber,pageSize){
    return instanse.get(`users?page=${pageNumber}&count=${pageSize}`)
    .then (response=>{
    return response.data
    })
 },

 follow(userId){
  return instanse.post(`follow/${userId}`)
 },
 unfollow(userId){
  return instanse.delete(`follow/${userId}`)
 },
AuthMe(){
 return instanse.get(`auth/me`)
},
ProfileUser(userId){
  return instanse.get(`profile/` + userId )
    
  
},
 

GetStatus(userId){
  return instanse.get(`profile/status/${userId}`)
},
PutStatus(status){
  return instanse.put(`profile/status`, {status:status})
},
Login(email, password, rememberMe, captcha){
  return instanse.post(`/auth/login`,{email:email,password,password, rememberMe:rememberMe, captcha:captcha   } )
},
Logout(){
  return instanse.delete(`/auth/login` )
},
Captcha(){
  return instanse.get(`/security/get-captcha-url`)
}
 
}


