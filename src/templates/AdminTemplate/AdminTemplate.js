import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import AdminMenu from './Layout/AdminMenu/AdminMenu'
import AdminHeader from './Layout/AdminHeader/AdminHeader'
import "./AdminTemplate.css"
import { USER_LOGIN } from "../../redux/types/UserType"

export default function AdminTemplate() {
    const userLogin = useSelector(state => state.UserReducer.loginUser);
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem(USER_LOGIN) || userLogin.userRole !== "1") {
            alert('Bạn không có quyền truy cập vào trang này !')
            navigate(-1);
        };
    }, []);

    return (
        <Fragment>
            <div className='admin__template'>
                <AdminMenu />
                <div className='admin__right'>
                    <AdminHeader />
                    <div className='admin__content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
