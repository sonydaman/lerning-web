import React from 'react'
import { useLocation } from 'react-router'
import LandingLayout from './LandingLayout';
import { PublicLayout } from './PublicLayout';

export const Layout = (props) => {
    const {pathname} = useLocation();
    const handelLayout = ()=>{
        switch (pathname) {
            case '/home':
            case '/about':
                return <LandingLayout>{props.children}</LandingLayout>
            case '/gallery':
            case '/contact':
                return <PublicLayout>{props.children}</PublicLayout>
            default:
                return <PublicLayout>{props.children}</PublicLayout>
        }
    }
    return (
        <div>
            {handelLayout()}
        </div>
    )
}
