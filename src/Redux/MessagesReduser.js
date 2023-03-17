const UpdateNewMessageBody = "UpdateNewMessageBody"
const removePostAC = "removePostAC"
let initialState ={
  dialogsName: [
    { name: "Dimych", id: "1" },
    { name: "Igor", id: "2" },
    { name: "Kirill", id: "3" },
    { name: "Julia", id: "4" },
    { name: "Vitya", id: "5" },
  ],

  dialogsMessages: [
    { message: "No", id:"1" },
    { message: "Do you know programming languages?",  id:"2" },
    { message: "Yes",  id:"3" },
    { message: "No",  id:"4" },
    { message: "No",  id:"5" },
  ],
 
}
const MessageReduser = (state = initialState, action) =>{
   switch (action.type) {
    
    case "UpdateNewMessageBody":{
      
     return{
      ...state,
      dialogsMessage:[...state.dialogsMessage,{message:action.text}]
     
     }
   }
    
   case removePostAC:{
    return{
      ...state,
      dialogsMessages:[...state.dialogsMessages.filter(m=>m.id!=action.postId)]

    }
   }
    default:
        return state

   }
   
   
}
 
export default MessageReduser