import "./Modal.css"
import s from './Navbar.module.css'
import { Controller, useForm } from 'react-hook-form';
import { useContext, useState } from "react";
import Select from 'react-select';
import { Context } from './../publicHook/Context';

const Modal = ({ currentPersot, active, setActive, setcurrentPersot, setimageUrl }) => {
    const isMulti = true
    const { options, optionsCountri } = useContext(Context)

    const { register, reset, handleSubmit, clearErrors, control, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
    const onSubmit = (data) => {
        console.log(data);
        setcurrentPersot([...currentPersot, { surname: data.surname, name: data.name, middleName: data.middleName, age: data.age, paul: data.paul, countri: data.countri }])
        reset()

        fileReader.readAsDataURL(currentFile)

        fileReader.onloadend = () => {
          
            setimageUrl(fileReader.result)
        }
    }
    const getValue = (value) =>
        value ? options.find(p => p.value === value) : ""

    const getCountriValue = (value) => {
        if (value) {
            return isMulti
                ? optionsCountri.filter(c => value.indexOf(c.value) >= 0)
                : optionsCountri.find(c => c.value === value)
        } else {
            return isMulti ? [] : ""
        }

    }
    const [currentFile, setcurrentFile] = useState()
    const fileReader = new FileReader()

    const handleOnChange = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        setcurrentFile(file)
    }
    return (
        <div className={active ? "modal " + " active" : "modal"} onClick={() => setActive(false)}   >
            <div className={active ? "modal__content " + " active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <h5>Парраметры человека:</h5>
                <div className="bodi"></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.bodyBlok}>
                        <div className={s.familiBlok}>
                            <h5>Фамилия:</h5>
                            <input onFocus={() => clearErrors}  {...register("surname", {
                                required: true,
                            })} className={errors.surname ? s.errorsInput : s.famili} type="text" placeholder='Введите фамилию' />
                        </div>

                        <div className={s.familiBlok}>
                            <h5>Имя:</h5>
                            <input onFocus={clearErrors} {...register("name", {
                                required: true,
                            })} className={errors.name ? s.errorsInput : s.famili} type="text" placeholder='Имя' />
                        </div>
                    </div>
                    <div className={s.bodyBlok}>
                        <div className={s.familiBlok}>
                            <h5>Отчество:</h5>
                            <input {...register("middleName", {
                                required: true,
                            })} className={errors.middleName ? s.errorsInput : s.famili} type="text" placeholder='Отчество' />
                        </div>
                        <div className={s.familiBlok}>
                            <h5>Возраст:</h5>
                            <input {...register("age", {
                                required: true,
                            })} className={errors.age ? s.errorsInput : s.famili} type="number" placeholder='Возраст' />
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <input {...register("file")} accept="image/*" type="file" onChange={handleOnChange} placeholder='Выберите файл' />

                        </div>
                    </div>
                    <div className={s.selectBlok}>
                        <div className={s.familiBlok}>
                            <h5>Выберите пол:</h5>
                            <Controller
                              control={control}
                                name="paul"
                                rules={{ required: "Выберите пол человека!" }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <div>
                                        <Select placeholder="Выберите пол" onChange={(newValue) => onChange(newValue.value)} value={getValue(value)} className={error ? s.errorsSelect : s.select} options={options}> </Select>
                                    </div>
                                )}
                            />

                        </div>

                        <div className={s.familiBlok}>
                            <h5>Страны где проживал человек:</h5>
                            <Controller
                                control={control}
                                name="countri"
                                rules={{ required: "Выберите страны!" }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <div>
                                        <Select placeholder="Выберите страны" onChange={(newValue) =>
                                            onChange(isMulti ? newValue.map(n => n.value) :
                                                newValue.value)

                                        } value={getCountriValue(value)} className={error ? s.errorsSelect : s.select} options={optionsCountri} isMulti={isMulti}> </Select>

                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className={s.footerBlok}>
                        <button onClick={() => setActive(false)}>Закрыть</button>

                        <input disabled={!isValid} className={s.submit} onClick={() => clearErrors()} type="submit" />
                    </div>
                </form>
 
            </div>
        </div>
    )
}
export default Modal