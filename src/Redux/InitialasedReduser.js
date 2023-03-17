import { AuthMeThunk } from "./AuthLoginReduser"

const initial ="initial"
let initialState = {
    initialAuthMe:false}


const InitialaisedReduser = (state = initialState, action)=>{
switch (action.type) {
    case initial:
       
        return{
            ...state,initialAuthMe:true
        }
    
    default:
       return state
}
}
export const initialAC = ()=>({
    type:initial
})
export const initialSuccessThunk = ()=> (dispatch)=>{
       let promise = dispatch(AuthMeThunk())
       
       Promise.all([promise])
        .then(()=>{
       dispatch(initialAC())
       })
    }



export default InitialaisedReduser


