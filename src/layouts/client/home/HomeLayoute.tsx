import React from 'react'
import Header from '../../../components/client/layout/header/Header'
import { Outlet } from 'react-router-dom'
import HomePage from '../../../pages/client/home/HomePage'
import Footer from '../../../components/client/layout/footer/Footer'

function HomeLayoute() {
    return (
        <>
            {/* header */}
            <Header />
            {/* cotent */}
            <HomePage />
            {/* out chuyen trang */}
            <Outlet />
            {/* footer */}
            <Footer/>
        </>
    )
}

export default HomeLayoute