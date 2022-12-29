import React from "react";
import "./Login.css"
import picReact from '../../../assets/images/libary/reactlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, RegisterAction } from '../../../redux/actions/UserAction';
import { LoginModalAction, RegisterModalAction } from '../../../redux/actions/ModalAction';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
    const { t } = useTranslation();
    const loginStatus = useSelector(state => state.ModalReducer.loginModal);
    const regesterStatus = useSelector(state => state.ModalReducer.regesterModal);
    const dispatch = useDispatch();

    const loginFormik = useFormik({
        initialValues: {
            userEmail: "",
            userPassword: ""
        },
        validationSchema: Yup.object({
            userEmail: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"
                ),
            userPassword: Yup.string()
                .required("Required")
                .min(6, "Must be 6 characters or more"),
        }),
        onSubmit: (values) => {
            dispatch(LoginAction(values));
        },
    });
    const registerFormik = useFormik({
        initialValues: {
            userEmail: "",
            userName: "",
            userPassword: "",
            userRePassword: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .required("Required")
                .min(3, "Must be 3 characters or more"),
            userEmail: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"
                ),
            userPassword: Yup.string()
                .required("Required")
                .min(6, "Must be 6 characters or more"),
            userRePassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("userPassword"), null], "Password must match"),
        }),

        onSubmit: (values) => {

            dispatch(RegisterAction(values));
        },
    });
    return (
        <div>
            <div id="popup__login" className={loginStatus ? ("modal__box modal__active") : ("modal__box")}>
                <div className="modal__popup">
                    <div className="modal__close" onClick={() => { dispatch(LoginModalAction(false)) }}>×</div>
                    <div className="modal__content">
                        <div className="content__picture">
                            <img src={picReact} className="modal__picture" alt="khanh's blog"></img>
                        </div>
                        <form className="login__form" onSubmit={loginFormik.handleSubmit}>
                            <h2 className='login__title'>{t("member login")}</h2>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faEnvelope} className="modal__icon" />
                                <input type='text' className='modal__input' name='userEmail' value={loginFormik.values.userEmail}
                                    onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} placeholder='Email'
                                ></input>
                                {loginFormik.touched.userEmail && loginFormik.errors.userEmail && (
                                    <p className="error__msg"> *{loginFormik.errors.userEmail} </p>
                                )}
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userPassword' value={loginFormik.values.userPassword}
                                    onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} placeholder='password'></input>
                                {loginFormik.touched.userPassword && loginFormik.errors.userPassword && (
                                    <p className="error__msg"> *{loginFormik.errors.userPassword} </p>
                                )}
                            </div>
                            <button className='login__button' type='submit'>{t("login")}</button>
                            <br></br>
                            <span>
                                Email: <i>admin@gmail.com</i>
                                <br></br>
                                Password: <i>123456</i>
                            </span>
                            <a className='login__create' onClick={() => { dispatch(RegisterModalAction(true)) }}>{t("create your account")}&#x2794;</a>
                        </form>
                    </div>
                </div>
            </div>
            <div id="popup__register" className={regesterStatus ? ("modal__box modal__active") : ("modal__box")}>
                <div className="modal__popup">
                    <a className="modal__close" onClick={() => { dispatch(RegisterModalAction(false)) }}>×</a>
                    <div className="modal__content">
                        <div className="content__picture">
                            <img src={picReact} className="modal__picture" alt="khanh's blog"></img>
                        </div>
                        <form className="login__form" onSubmit={registerFormik.handleSubmit}>
                            <h2 className='login__title'>{t("member register")}</h2>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faEnvelope} className="modal__icon" />
                                <input type='text' className='modal__input' name='userEmail' placeholder='Email' onChange={registerFormik.handleChange}></input>
                                {registerFormik.touched.userEmail && registerFormik.errors.userEmail && (
                                    <p className="error__msg"> *{registerFormik.errors.userEmail} </p>
                                )}
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faUser} className="modal__icon" />
                                <input type='text' className='modal__input' name='userName' placeholder='Name' onChange={registerFormik.handleChange}></input>
                                {registerFormik.touched.userEmail && registerFormik.errors.userName && (
                                    <p className="error__msg"> *{registerFormik.errors.userName} </p>
                                )}
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userPassword' placeholder='password' onChange={registerFormik.handleChange}></input>
                                {registerFormik.touched.userEmail && registerFormik.errors.userPassword && (
                                    <p className="error__msg"> *{registerFormik.errors.userPassword} </p>
                                )}
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userRePassword' placeholder='repeat password' onChange={registerFormik.handleChange}></input>
                                {registerFormik.touched.userEmail && registerFormik.errors.userRePassword && (
                                    <p className="error__msg"> *{registerFormik.errors.userRePassword} </p>
                                )}
                            </div>
                            <button className='login__button' type='submit'>{t("register")}</button>
                            <a className='login__create' onClick={() => { dispatch(LoginModalAction(true)) }}>{t("back to login")}&#x2794;</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
