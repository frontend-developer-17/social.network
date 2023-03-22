import s from "./user.module.css"
import image from "../image/image.png"
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { UserPagination } from "../helpers/paginations";

const User = (props) => {

    

   



    return <div >
        <div className="">
<UserPagination  totalPage={props.totalPage} pageSize={props.pageSize}  currentNumber={props.currentNumber} currentPage={ props.currentPage}  />
        </div>
        {
            props.user.map(u => <div className="">
                <div className={s.formBlock}>
                    <div className="">
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : image} className={s.image} alt="" />

                        </NavLink>
                        <div className="">
                            
                            {u.followed
                            
                                ? <button disabled={props.userDisable.some(id=>id === u.id)} onClick={() => {
                             
                                    props.unfollowUserThunk(u.id)

                                     }}>Folow</button>
                                : <button disabled={props.userDisable.some(id=>id === u.id)} onClick={() => {
                                  debugger
                                    props.followUserThunk(u.id)
                                    

                                     }}>unFoloow</button>}
                        </div>
                    </div>
                    <div className={s.countriBlock}>
                        <div className="">
                            <div className={s.name}>{u.name}</div>
                            <div className="">{u.status}</div>
                        </div>
                      

                    </div>
                </div>



            </div>

            )
        }
    </div>


}
export default User
