import s from "./ContentInfo.module.css"
import React, { useState } from 'react';
import Image from "../../../image/image.png"
import Preloader from "../../../image/preloader";
import Status from "./Status";
import ProfileStatus from "./Status";
import fileLoding from ".//../../../image/fileLoading.png"
import ModalAboutMe from "./modalAboutMe";

const ContentInfo = (props) => {
    debugger
    const [editMod, seteditMode] = useState(false)
    if (!props.userProfile) {
        return <Preloader />
    }
    if (props.userProfile.length == 0) {

        return <Preloader />
    }
    //const postPhoto = (e) => {
    //   if (e.target.files[0]) {

    //      props.savePhotos(e.target.files[0])
    //  }
    //  }


    return (
        <div className="">
            <img src="https://th.bing.com/th/id/R.501f0c3bf08afe84ea1c609340a41ac8?rik=sMQE0%2fhiEJZNJg&riu=http%3a%2f%2fmy.nn0v.ru%2ffiles%2f2012%2f05%2fp-%d0%9d%d0%b8%d0%b6%d0%bd%d0%b8%d0%b9-%d0%9d%d0%be%d0%b2%d0%b3%d0%be%d1%80%d0%be%d0%b4-01.jpeg&ehk=oHjY35Kjd7HPAvaWeROJE3rilHVznTw%2bywQqPeB9Ges%3d&risl=&pid=ImgRaw&r=0" alt="" className={s.parix} />

            <div className={s.flexblock}>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.CzOY3VrD-ATrEhzA8WNaowHaE7?pid=ImgDet&rs=1" alt="" className={s.bmw} />
                </div>
                <div className={s.textBMW}>
                    BMW M8 COMPETITION COUPE Максимальная динамика движения и эксклюзивность. 8-цилиндровый двигатель M TwinPower Turbo мощностью 625 л.с. Полный привод M xDrive с активным дифференциалом.
                </div>


            </div>
            <div className="">
                <div className={s.nameBlok}>
                    <img className={s.image} src={props.userProfile.photos.large || Image} alt="" />
                    <div className=""> <span>Имя пользователя:   {props.userProfile.fullName}</span>
                        <div className={s.statusBlok}>
                            <div className=""> <span>Статус:</span></div>
                            <div className={s.status}><ProfileStatus {...props} profileStatus={props.profileStatus} /></div>

                        </div>
                    </div>
                </div>



                {props.isOwner ? <div className={s.portfolio} >
                    <button onClick={() => seteditMode(true)}>Редактировать профиль</button>

                    {props.userProfile.aboutMe && <div className=""><b>Моя информация:</b>
                        {props.userProfile.aboutMe}
                    </div>}
                    {props.userProfile.lookingForAJob && <div className="">

                        <b>Статус работы:</b> Ищу работу!
                    </div>}

                    <div className="">
                        {props.userProfile.lookingForAJobDescription &&
                            <div className="">
                                <b>Мои навыки:</b> {props.userProfile.lookingForAJobDescription}
                            </div>}
                    </div>
                    <div className=""></div>
                    {props.userProfile.contacts && <div>

                        <b>Контакты:</b>

                        {Object.keys(props.userProfile.contacts).map(key => {
                            return <MyContacts titleContacts={key} valueContacts={props.userProfile.contacts[key]} />
                        })}     </div>}


                </div> : ""}

            </div>

            <ModalAboutMe active={editMod} setActive={seteditMode} savePhotos={props.savePhotos} saveProfileThunk={props.saveProfileThunk
            } />


        </div>
    )
}

export const MyContacts = ({ titleContacts, valueContacts }) => {

    return (
        <div className="">
            {valueContacts && <div className="">  <b>{titleContacts}:</b> {valueContacts} </div>}
        </div>
    )
}
export default ContentInfo
