
import { React } from 'react';
import { useForm } from "react-hook-form";
import s from "./login.module.css"
import { connect } from 'react-redux';
import { LoginThunk } from './../Redux/AuthLoginReduser';
import { compose } from 'redux';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = (props) => {

  debugger



  const { register, reset, handleSubmit, setError, clearErrors, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    debugger
    props.LoginThunk(data.email, data.password, data.rememberMe, setError, data.captcha)

    reset()
  }

  if (props.isAuth) {
    return <Navigate to={'/profile/'} />
  }

  return (

    <form className={s.formik} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.regision}>Регистрация</h3>
      <div className={s.blok}>
       
          {props.captcha ?
           <div>
            <h4>Введите символы!:</h4>
            <img src={props.captcha} alt="" srcset="" />
            <input onClick={() => clearErrors()} {...register("captcha", {required:'Введите символы!'})} type="text" />
            </div> : ""}
            {errors.captcha && <div style={{ color: 'red', }}>{errors.captcha?.message} </div>}

            <h4>Email:</h4>
        <div className={s.blokEmail}>
          <input onClick={() => clearErrors()}  placeholder='Email' className={errors.email ? s.email : ""}  {...register("email", {
            required: 'Введите email!',
          })} />
          {errors.email && <div style={{ color: 'red', }}>{errors.email?.message} { }</div>}
        </div>

        <h4>Password:</h4>
        <div className={s.passwordBlok}>

          <input onClick={() => clearErrors()} type="password" placeholder='Password' className={errors.password ? s.password : ""}  {...register("password", {
            required: 'Введите пароль!', minLength: {
              value: 5,
              message: 'Минимальная длинна символов 5'
            },
          })} />
        </div>




        {errors.password && <div style={{ color: 'red', }}>{errors.password?.message}</div>}

        <input  {...register("rememberMe")} type="checkbox" />

        {errors.server && <div style={{ color: 'red', }}>{errors.server.message}</div>}

        <input className={s.formButton} type="submit" />

      </div>

    </form>
  );
}
const mapStateToProps = (state) => ({
  isAuth: state.AuthLoginReduser.isAuth,
  captcha: state.AuthLoginReduser.captcha
})
const LoginContainer = compose(
  connect(mapStateToProps, { LoginThunk })
)(Login)
//const loginContainer = connect(mapStateToProps,{LoginThunk})(Login)

export default LoginContainer