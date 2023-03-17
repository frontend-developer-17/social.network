import { connect } from 'react-redux';
import { compose } from 'redux';
import { RedirectLogin } from '../../hoc/redirect';
import {  UpdateNewMessageBodyCreater } from '../../Redux/MessagesReduser';
import DialogsMessage from './Dialog';


const mapStateToProps = (state) =>{
    return { 
        dialogsMessages: state.messagePage.dialogsMessages,
        dialogsName:state.messagePage.dialogsName,
        arrayDialogMessage:state.messagePage.arrayDialogMessage

    }
 
 }
 
 
 export default compose(
    RedirectLogin,
    connect(mapStateToProps,{})

 )(DialogsMessage)
 