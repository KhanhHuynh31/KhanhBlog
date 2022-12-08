import React from 'react'
import "./About.css"
import reactjsPicture from '../../../assets/images/libary/react.png';
import i18Picture from '../../../assets/images/libary/i18next.png';
import reduxPicture from '../../../assets/images/libary/redux.png';
import routerPicture from '../../../assets/images/libary/router.png';

import tinyMCEPicture from '../../../assets/images/libary/tinyMCE.png';
import yupPicture from '../../../assets/images/libary/yup.png';
import reacthookformPicture from '../../../assets/images/libary/reacthookform.png';
import reacthottoast from '../../../assets/images/libary/reacthottoast.png';

export default function About() {
    return (
        <div className='about__content'>
            <div className='about__header'>
                <h2>CONTACT ME</h2>
                <p>Email:<label> khanhhuynh0318@gmail.com</label></p>
            </div>
            <div className='about__libary'>
                <h2>ABOUT THIS WEBSITE</h2>
                <a href='https://github.com/KhanhHuynh31/KhanhBlog' target="_blank" rel="noopener noreferrer" className='about__link'>Link Git Hub</a>
                <p className='libary__title'>Libary use on this website: </p>
                <div className='about__items'>
                    <div className='about__item'>
                        <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={reactjsPicture}></img>
                                <p>React JS 18.2.0</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://react-redux.js.org/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={reduxPicture}></img>
                                <p>React Redux 8.0.5</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://reactrouter.com/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={routerPicture}></img>
                                <p>React Router 6.3.0</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://www.i18next.com/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={i18Picture}></img>
                                <p>i18next 21.9.1</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://www.tiny.cloud/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={tinyMCEPicture}></img>
                                <p>TinyMCE 6.0.0</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://github.com/jquense/yup' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={yupPicture}></img>
                                <p>Yup 0.32.11</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://react-hook-form.com/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={reacthookformPicture}></img>
                                <p>React Hook Form 7.40.0</p>
                            </div>
                        </a>
                    </div>
                    <div className='about__item'>
                        <a href='https://react-hot-toast.com/' target="_blank" rel="noopener noreferrer">
                            <div className='item__box'>
                                <img alt="khanh's blog" src={reacthottoast}></img>
                                <p>React Hot Toast 2.4.0</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
