import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
const Header = (props) =>{
    const logout = ()=>{
        props.logoutThunk()
    }
    return (
        <header className={s.hed}>
            <div className={s.headerBlok}>
            <img src="https://th.bing.com/th/id/OIP.5ZLgBV2-q6IjVC_iuDA6uAHaHa?pid=ImgDet&rs=1" alt="" />
          
            {props.isAuth? <div className={s.login}>{props.login}  <button className={s.button} onClick={logout}>Выйти</button>  </div>:<NavLink>login</NavLink>}
            </div>
           
        </header>
    )
}
export default Header;
