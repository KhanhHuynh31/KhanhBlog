import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import SearchModal from '../../components/SearchModal/SearchModal'
import Login from '../../pages/Home/Account/Login'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'

export default function HomeTemplate() {
    return (
        <Fragment>
            <Login />
            <SearchModal />
            <div className='container'>
                <Header />
                <Outlet />
                <BackToTopButton />
                <Footer />
            </div>
        </Fragment>
    )
}
