import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Modal from './Modal';
import { Context } from './../publicHook/Context';
const options = [{
    value: "man",
    label: "мужской"
}, {
    value: "voman",
    label: "женский"
}, {
    value: "null",
    label: "не выбрано"
}
]

const optionsCountri = [{
    value: "null",
    label: "Не выбрано"
}, {
    value: "Russian",
    label: "Russian"
}, {
    value: "Canada",
    label: "Canada"
}, {
    value: "New-Zeland",
    label: "New-Zeland"
},
{
    value: "Japan",
    label: "Japan"
},
]
const Navbar = (props) => {

    const [currentPersot, setcurrentPersot] = useState([{ surname: '', name: '', middleName: '', age: '', paul: '', countri: '' }])
    const [modalActive, setmodalActive] = useState(false)
    const [imageUrl, setimageUrl] = useState()

    return (
       
      <Context.Provider value={{options,optionsCountri}}>
        <nav className={s.navbar}>
            <div className={s.link}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/dialog" className={({ isActive }) => isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/user" className={({ isActive }) => isActive ? s.active : ''}>User</NavLink>
            </div>

            <div className={s.link}>
                <a> News</a>
            </div>
            <div className={s.link}>
                <a>Music</a>
            </div>
            <div className={s.link}>
                <a>Settings</a>
            </div>
            {imageUrl ? <img src={imageUrl ? imageUrl : ""} className={s.fileImg} alt="" /> : ""}

            {currentPersot.map((p, index) =>
                <div key={index}>
                    <h4> {p.surname ? <div> Фамилия: {p.surname}</div> : ""}</h4>
                    <h4> {p.name ? <div> Имя: {p.name}</div> : ""}</h4>
                    <h4> {p.middleName ? <div> Отчество: {p.middleName}</div> : ""}</h4>
                    <h4> {p.age ? <div> Возраст: {p.age}</div> : ""}</h4>
                    <h4> {p.paul ? <div> Пол: {p.paul}</div> : ""}</h4>
                    <h4> {p.countri ? <div> Страны: {p.countri + ""}</div> : ""}</h4>
                </div>
            )}
            <Modal currentPersot={currentPersot}
                active={modalActive} setActive={setmodalActive}
                setcurrentPersot={setcurrentPersot}
                setimageUrl={setimageUrl} >
            </Modal>
            <div className={s.infoBlock}>
                <button onClick={() => setmodalActive(true)} >Найти человека:</button>
            </div>
        </nav>
      </Context.Provider>
    )
}
export default Navbar