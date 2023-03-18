
import React, { useEffect, useState } from 'react';



function ProfileStatus (props)  {
  

    const [currentStateStatus,setCurrentStateStatus]= useState(false)
    const [stateStatus,setStateStatus]= useState({state:props.profileStatus})
useEffect(()=>{
   setStateStatus({...stateStatus,state:props.profileStatus})
},[props.profileStatus])

    const currentStatus=(e)=>{
        const valueIn = e.target.value
     
     
     
      setStateStatus({...stateStatus,state:valueIn})
     
    }

   const activateEditMode=()=>{
        setCurrentStateStatus(true)
    }
    const onActivateEditMode=()=>{
        setCurrentStateStatus(false)
        
        props.updateStatus(stateStatus.state)
        
       
    }

    
        return (
            <>
                {!currentStateStatus &&
                    <div className="">
                        <span onClick={activateEditMode}>{props.profileStatus?props.profileStatus:"Отсутствует"}</span>
                    </div>
                }
                {currentStateStatus &&

                    <div className="">
                        <input autoFocus={true} onChange={currentStatus} type="text" value={stateStatus.state} />
                        <button onClick={onActivateEditMode}  >Сохранить</button>
                    </div>


                }
            </>
        )
    


}




export default ProfileStatus