import React, { useEffect, useState } from "react";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { USER_LOGOUT, USER_LOGIN } from '../../../../redux/types/UserType'
import { LoginModalAction, SearchModalAction } from '../../../../redux/actions/ModalAction';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const userLoginData = useSelector(state => state.UserReducer.loginUser);
  const handleChange = (value) => {
    i18n.changeLanguage(value)
    setLanguage(value);
  }
  const [login, setLogin] = useState();
  useEffect(() => {
    if (!localStorage.getItem(USER_LOGIN)) {
      setLogin(false)
    }
    else {
      setLogin(true)
    }
  }, [userLoginData]);
  const [scroll, setScroll] = useState(0);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState()

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (searchText === undefined || searchText === "") {
      toast.error("You must enter a keyword")
    }
    else {
      navigate('/search/' + searchText)
    }
  }
  const getSearchText = (event) => {
    const value = event.target.value;
    setSearchText(value.trim());
  }
  useEffect(() => {
    let progressBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div id='home' className='header'>
      <div id="progressBar" style={{ transform: `scale(${scroll}, 1)` }} />
      <div className='header__left'>
        <ul className="header__menu">
          <li className="menu__item">
            <NavLink to="/" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('home')}</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/category" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('category')}</NavLink>
          </li>
          {login &&
            <li className="menu__item">
              <NavLink to="/manage-post" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('posting')}</NavLink>
            </li>
          }
          <li className="menu__item">
            <NavLink to="/about" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('about')}</NavLink>
          </li>
          {!login &&
            <li className="menu__item">
              <a onClick={() => {
                dispatch(LoginModalAction(true))
              }
              } className="menu__link button__modal">{t('login')}</a>
            </li>
          }
        </ul>
      </div>
      <div className='header__logo'>
        <h3>Khanh's Blog</h3>
      </div>
      <div className='header__right'>
        <span className="home__search">
          <form onSubmit={handleSubmitLogin}>
            <input type="text" className='search__input' onChange={getSearchText} />
            <button type='submit' className='search__button'>{t('search')}</button>
          </form>
        </span>
        <a className="search__open" onClick={() => {
          dispatch(SearchModalAction(true))
        }
        }><FontAwesomeIcon icon={faMagnifyingGlass} className="user__icon" />{t('search')}</a>
        {login &&
          <div className="user__box">
            <FontAwesomeIcon icon={faUser} className="user__icon" />
            <span className="user__name">{userLoginData.userName}</span>
            <div className="user__dropdown">
              <a className="menu__link button__modal" onClick={() => {
                const action = { type: USER_LOGOUT }
                dispatch(action);
              }}>{t('log out')}</a>
            </div>
          </div>
        }
        <div className='language__content'>
          <a className={language === "vn" ? 'active' : null} onClick={() => handleChange("vn")}>VN</a>
          <label> / </label>
          <a className={language === "en" ? 'active' : null} onClick={() => handleChange("en")}>EN</a>
        </div>
      </div>
      <div className="dropdown" >
        <div className="dropdown__icon">&#9776;</div>
        <div className="dropdown-content">
          <NavLink to="/" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('home')}</NavLink>
          <NavLink to="/category" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('category')}</NavLink>
          <NavLink to="/manage-post" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('posting')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>{t('about')}</NavLink>
          <a className="menu__link" onClick={() => {
            dispatch(SearchModalAction(true))
          }
          }>{t('search')}</a>
          {login && <a className={({ isActive }) => "menu__link" + (isActive ? " active" : "")} onClick={() => {
            const action = { type: USER_LOGOUT }
            dispatch(action);
          }}>{t('log out')}</a>
          }
          {!login && <a className={({ isActive }) => "menu__link" + (isActive ? " active" : "")} onClick={() => {
            dispatch(LoginModalAction(true))
          }
          }>{t('login')}</a>
          }
          <a className={language === "vn" ? 'active' : null} onClick={() => handleChange("vn")}>Tiếng Việt</a>
          <a className={language === "en" ? 'active' : null} onClick={() => handleChange("en")}>English</a>
        </div>
      </div>
    </div>
  )
}
