import "./AboutMeModal.css"
import { useForm } from 'react-hook-form';
const ModalAboutMe = ({ active, setActive, savePhotos, saveProfileThunk }) => {
    const { register, reset, handleSubmit, setError, clearErrors, control, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
    const onSubmit = (data,) => {
        console.log(data);

        saveProfileThunk(data, setError)
       
    }

    const postPhoto = (e) => {
        if (e.target.files[0]) {

            savePhotos(e.target.files[0])
        }
    }
   
    return (
        <div  className={ active ? "modal " + " active" : "modal"} onClick={() => setActive(false)}   >
            <div  className={ active ? "modal__content " + " active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <span>Изменить фотографию!   </span>
                <label for="fileButton"  ><b>Загрузить новое фото</b></label>
                <input id="fileButton" onChange={postPhoto} className="inputFile" type="file" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                <div className="socialNetwork" >
                        <h5>Имя пользователя:</h5>
                        <input onClick={() => clearErrors()} className="currentEL"   {...register("FullName")} type="text" placeholder='Введите имя пользователя' />
                    </div>
                 
                    <div className="socialNetwork" >
                        <h5>Мои навыки:</h5>
                        <input   className="currentEL"  {...register("LookingForAJobDescription")} type="text" placeholder='Введите свои навыки' />
                    </div>
                  
                  

                    <div className="infoBlok">
                   <div >
                        <h5>Расскажите о себе:</h5>
                        <textarea   {...register("AboutMe")} type="text" placeholder='Расскажите о себе' />
                    </div>
                    <div className="socialNetwork" >
                        <h5>Ищу работу:</h5>
                        <input className="currentEL"  {...register("LookingForAJob")} type="checkbox" />
                    </div>
                    </div>
                    <h5>Добавьте ссылки на контакты:</h5>
                    <div className="infoBlok">
                        <div className="socialNetwork">
                            <h5>github:</h5>
                            <input className="currentEL"  {...register("contacts.github")} type="text" placeholder='Ссылка на github ' />
                        </div>


                        <div className="socialNetwork" >
                            <h5>vk:</h5>
                            <input className="currentEL"   {...register("contacts.vk")} type="text" placeholder='Ссылка на vk' />
                        </div>
                    </div>
                    <div className="infoBlok">
                        <div className="socialNetwork" >
                            <h5>facebook:</h5>
                            <input className="currentEL"  {...register("contacts.facebook")} type="text" placeholder='Ссылка на facebook' />
                        </div>
                        <div className="socialNetwork" >
                            <h5>instagram:</h5>
                            <input className="currentEL"   {...register("contacts.instagram")} type="text" placeholder='Ссылка на instagram' />
                        </div>
                    </div>
                    <div className="infoBlok">
                        <div className="socialNetwork" >
                            <h5>twitter:</h5>
                            <input className="currentEL"   {...register("contacts.twitter")} type="text" placeholder='Ссылка на twitter' />
                        </div>
                        <div className="socialNetwork" >
                            <h5>website:</h5>
                            <input className="currentEL"   {...register("contacts.website")} type="text" placeholder='Ссылка на website' />
                        </div>
                    </div>
                    <div className="infoBlok">
                        <div className="socialNetwork" >
                            <h5>youtube:</h5>
                            <input className="currentEL"   {...register("contacts.youtube")} type="text" placeholder='Ссылка на youtube' />
                        </div>

                        <div className="socialNetwork" >
                            <h5>mainLink:</h5>
                            <input className="currentEL"   {...register("contacts.mainLink")} type="text" placeholder='Ссылка на mainLink' />
                        </div>
                    </div>
                    {errors.server && <div style={{ color: 'red', }}>{errors.server.message}</div>}
                    <input onClick={() => clearErrors} type="submit" />
                </form>
            </div>
        </div>
    )
}
export default ModalAboutMe