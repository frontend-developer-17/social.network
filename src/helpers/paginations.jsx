import s from "./paginators.module.css"
import { useState } from 'react';
import icon from ".//../image/IconPeremot.png"
import classNames from 'classnames/bind';
export const UserPagination = ({ totalPage, pageSize, currentNumber, currentPage, paginationsPortion = 10 }) => {

    let pageNumber = Math.ceil(totalPage / pageSize)

    let pages = []
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageNumber / paginationsPortion)
    let [currentPortion, setcurrentPortion] = useState(1)
    let leftButton = (currentPortion - 1) * paginationsPortion + 1
    let rightButton = currentPortion * paginationsPortion



    return (
        <div >
            <div className="">
                {currentPortion > 1 &&
                <button className={s.leftBlok} onClick={()=>{setcurrentPortion(currentPortion - 1)}}>{"<<Вернуться"}</button>}
        

                {pages.filter(p => p >= leftButton && p <= rightButton)
                    .map(p => {
                        return <span  onClick={() => 
                        { currentNumber(p) }} className= {classNames({ [s.currentNumberActive]:currentPage === p}, s.activeNumber)}>
                            {p}</span>
                    })}
                
           

                {portionCount > currentPortion && 
               
               <button className={s.rightBlok} onClick={()=>{setcurrentPortion(currentPortion + 1)}}>{"Далее>>"}</button>}
                    
            </div>
        </div>
    )
}