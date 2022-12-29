import React, { useState } from "react";
import "./Login.css"
import picReact from '../../../assets/images/libary/reactlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, RegisterAction } from '../../../redux/actions/UserAction';
import { LoginModalAction, RegisterModalAction } from '../../../redux/actions/ModalAction';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    const { t } = useTranslation();
    const loginStatus = useSelector(state => state.ModalReducer.loginModal);
    const regesterStatus = useSelector(state => state.ModalReducer.regesterModal);

    const dispatch = useDispatch();
    const [data, setData] = useState({
        userEmail: '',
        userName: '',
        userPassword: '',
        userRepassword: '',
    })
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        dispatch(LoginAction(data));

    }
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        dispatch(RegisterAction(data));
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }
    return (
        <div>
            <div id="popup__login" className={loginStatus ? ("modal__box modal__active") : ("modal__box")}>
                <div className="modal__popup">
                    <div className="modal__close" onClick={() => { dispatch(LoginModalAction(false)) }}>×</div>
                    <div className="modal__content">
                        <div className="content__picture">
                            <img src={picReact} className="modal__picture" alt="khanh's blog"></img>
                        </div>
                        <form className="login__form" onSubmit={handleSubmitLogin}>
                            <h2 className='login__title'>{t("member login")}</h2>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faEnvelope} className="modal__icon" />
                                <input type='text' className='modal__input' name='userEmail' value={data.email} placeholder='Email'
                                    onChange={handleChange} required></input>
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userPassword' value={data.password} placeholder='password' onChange={handleChange} required></input>
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
                        <form className="login__form" onSubmit={handleSubmitRegister}>
                            <h2 className='login__title'>{t("member register")}</h2>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faEnvelope} className="modal__icon" />
                                <input type='text' className='modal__input' name='userEmail' placeholder='Email' onChange={handleChange} required></input>
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faUser} className="modal__icon" />
                                <input type='text' className='modal__input' name='userName' placeholder='Name' onChange={handleChange} required></input>
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userPassword' placeholder='password' onChange={handleChange} required></input>
                            </div>
                            <div className='modal__form'>
                                <FontAwesomeIcon icon={faLock} className="modal__icon" />
                                <input type='password' className='modal__input' name='userRepassword' placeholder='repeat password' required></input>
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
