import React from "react";
import "./AdminMenu.css"
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function AdminMenu() {
  const { t } = useTranslation();

  return (
    <div className='menu__content'>
      <div className='menu__logo'>
        <Link to="home">
          <h2 className='menu__title'>
            Khanh's Blog
          </h2>
        </Link>
      </div>
      <div className='menu__list'>
        <ul className='list__items'>
          <li className='list__item'>
            <NavLink to="/" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faHouse} /><span> {t("home")}</span> </NavLink>
          </li>
          <li className='label__menu'>
            <span>{t("manage")}</span>
          </li>
          <li className='list__item'>
            <NavLink to="manage-post" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faBook} /><span> {t("posting")}</span> </NavLink>
          </li>
          <li className='list__item'>
            <NavLink to="list-post" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faBookOpen} /><span> {t("list post")}</span> </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
