import MessageReduser from "./MessagesReduser"
import NavBarReduser from "./NavBarReduser";
import ProfileReduser from "./ProfileReduser"
let Store = {
  _rerenderEntireTree() {
    console.log("state change");
  },

  _State: {

    profilePage: {
      postInfo: [
        { id: "1", message: "Hey, why nobody love me?", likesCount: "5" },
        { id: "2", message: "Hello", likesCount: "10" },
        { id: "3", message: "l go to walk", likesCount: "23" },
        { id: "4", message: "Hi", likesCount: "46" },
      ],
      newPost: "it-kamasutra"
    },
    messagePage: {
      dialogsName: [
        { name: "Dimych", id: "1" },
        { name: "Igor", id: "2" },
        { name: "Kirill", id: "3" },
        { name: "Julia", id: "4" },
        { name: "Vitya", id: "5" },
      ],

      dialogsMessages: [
        { message: "No" },
        { message: "Do you know programming languages?" },
        { message: "Yes" },
        { message: "No" },
        { message: "No" },
      ],
      arrayDialogMessage:""
    },
    navBar:{
       navBarPerson: [
        {}
     ]
    },
   

  },

  getState() {
    return this._State
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer
  },



  dispatch(action) {

   this._State.profilePage = ProfileReduser(this._State.profilePage,action)
   this._State.messagePage = MessageReduser(this._State.messagePage,action)
   this._State.navBar = NavBarReduser(this._State.navBar,action)
   this.rerenderEntireTree()
    
  },
  
}




export default Store