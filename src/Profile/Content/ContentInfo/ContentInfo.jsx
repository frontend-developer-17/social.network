import s from "./ContentInfo.module.css"
import  React  from 'react';
import Image from "../../../image/image.png"
import Preloader from "../../../image/preloader";
import Status from "./Status";
import ProfileStatus from "./Status";
const ContentInfo = (props) =>{
   
        //if (props.userProfile.length==0) {
        ///return  <img src={Image} alt="" srcset="" />
       /// }
    //{props.userProfile.photos.large}
  //let vdf = props.userProfile.fullName
  if ( !props.userProfile) {
    return <Preloader/>
  }
  if(props.userProfile.length==0){
   
  return <Preloader/>
  }
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
      <ProfileStatus {...props} profileStatus={props.profileStatus}/>
</div>
        <div className="">
        <img className={s.image} src={props.userProfile.photos.large?props.userProfile.photos.large:Image } alt=""  /> 
        {props.userProfile.fullName}
       

        
    </div>
       
        </div>
    )
}
//<img src={props.userProfile.photos.large } alt=""  />  
//{props.userProfile.fullName}
export default ContentInfo
