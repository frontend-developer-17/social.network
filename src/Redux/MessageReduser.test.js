import MessageReduser, { RemovePostAC, UpdateNewMessageBodyCreater } from './MessagesReduser';

 test('new post', () => {
    let action = UpdateNewMessageBodyCreater("samurai")

    let state = {
       dialogsMessages: [
                { message: "No" },
                { message: "Do you know programming languages?" },
                { message: "Yes" },
                { message: "No" },
                { message: "No" },
   ]
}
      let newState = MessageReduser(state,action)
      expect(newState.dialogsMessages.length).toBe(6);

  });

  test('delete post', () => {
   let action = RemovePostAC(5)

   let state = {
      dialogsMessages: [
         { message: "No", id:"1" },
         { message: "Do you know programming languages?",  id:"2" },
         { message: "Yes",  id:"3" },
         { message: "No",  id:"4" },
         { message: "No",  id:"5" },
  ]
}
     let newState = MessageReduser(state,action)
     expect(newState.dialogsMessages.length).toBe(4);

 });