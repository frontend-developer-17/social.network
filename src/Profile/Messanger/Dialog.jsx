
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css"
import { useForm } from 'react-hook-form';
import fileLoding from ".//../../image/fileLoading.png"
import { useReducer } from 'react';
import MessageReduser, { UpdateNewMessageBodyCreater } from '../../Redux/MessagesReduser';

const Message = (props) => {
    return (
        <div className="">
            <div >{props.message}</div>
        </div>
    )

}
const Dialog = (props) => {
    return (

        <div className="">
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={'/dialog/' + props.id} >{props.name}</NavLink>
        </div>

    )
}
const DialogsMessage = (props) => {
    const { register, handleSubmit, reset } = useForm({ mode: "onBlur" });
    <div className="">
    </div>
    let dialogMessageEl = props.dialogsMessages.map(m => < Message key={m.id} message={m.message} />)
    let dialogesNameEl = props.dialogsName.map(d => <Dialog key={d.id} name={d.name} id={d.id} />)
    const [valueMessage, setValueMessage] = useState("")
    const [currentFile, setCurrentFile] = useState()
   const [fileImage, setfileImage] = useState()
    
    const [state,dispatch]= useReducer(MessageReduser,{ dialogsMessage: [
          { message: ""}]})
   
    const onSubmit = (data) => {
        dispatch({type:"UpdateNewMessageBody",text:data.post})
        setValueMessage('')
        reset()
       
        fileReader.readAsDataURL(currentFile)
        fileReader.onloadend = () => {
            setfileImage(fileReader.result)
        }
    }
    const handleChange = (e) => {
       const file = e.target.files[0]
        setCurrentFile(file)
    }
    const fileReader = new FileReader
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={s.messages}>
                <div className=""></div>
                {fileImage ?
                    <div >
                        <img className={s.imageBlok} src={fileImage ? fileImage : ""} alt="" /></div>
                    :""
                              
                }



{state?state.dialogsMessage.map(d=><div>{d.message}</div>):""}

                <div className={s.NameMessageEl}>
                    <div className="">{dialogesNameEl} </div>
               <div className={s.messageBlokPost}> {dialogMessageEl}</div>
               
                </div>
               



              <label for="fileButton" className={s.fileLabel}>
              <img className={s.imageFile} src={fileLoding} alt="" />
             
              <input  {...register("post",)} className={s.textarea} value={valueMessage} onChange={(e) => setValueMessage(e.target.value)}   ></input>
              <input  type="submit" value="Отправить" />

             
</label>

                <input id="fileButton" className={s.fileInput} type="file" onChange={handleChange} accept=".jpg, .jpeg,.png" />
              
               <div className={s.fileName}>{currentFile?  <h5>Файл загружен: {currentFile.name}</h5>:""} </div>
  
                <div className="">

                </div>



            </div >
        </form>
    )
}
export default DialogsMessage