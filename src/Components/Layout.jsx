import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideBar } from './SideBar'

export const Layout = (props) => {
    return (
        <div>
            <Header />
            <SideBar />
            {props.children}
            <Footer />
        </div>
    )
}
