import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LinkComponent from './LinkComponent'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAdjust } from '@fortawesome/free-solid-svg-icons'
// https://fontawesome.com/icons?d=gallery&p=2&s=solid
export const Sidebar = () => {
    const items = [
            {url:'/main',linkText:'Dashboard'},
            {url:'/about',linkText:'About us'},
            {url:'/profile',linkText:'Profile'},
            {url:'/gallery',linkText:'Gallery'},
            {url:'/academic',linkText:'Academic'},
            {url:'/achievements',linkText:'Achievements'},
            {url:'/books',linkText:'Books'},
            {url:'/home',linkText:'HomePage'},
            {url:'/contact',linkText:'ContactPage'},
            {url:'/signin',linkText:'Sign In'},
            {url:'/blog',linkText:'Blog'},
            {url:'/feature',linkText:'Feature'},
            {url:'/keyboard',linkText:'Keyboard'},
            {url:'/insert',linkText:'Insert'},
            {url:'/products',linkText:'ProductsPage'},
            {url:'/select',linkText:'SelectPage'},
            {url:'/tab',linkText:'TabPage'},
            {url:'/product',linkText:'ProductPage'},
            {url:'/caps',linkText:'CapsPage'},
            {url:'/profile',linkText:'ProfilePage'},
            {url:'/login',linkText:'Login'},
            {url:'/shift',linkText:'ShiftPage'},
            {url:'/gayatri',linkText:'Gayatri'},
            {url:'/alt',linkText:'Altpage'},
            {url:'/window',linkText:'WindowPage'},
           // {url:'/delete',linkText:'DeletePage'},
           // {url:'/landing',linkText:'LandingPage'},
           // {url:'/update',linkText:'UpdatePage'},
           // {url:'/oursocialsite',linkText:'OurSocialSitePage'},
            

        ]
    return (

        <ListGroup>
            <LinkComponent items={items} />
            {/*
            <ListGroup.Item>
                <Link to="/contact">
                    Contact
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>Contact</ListGroup.Item>
            <ListGroup.Item>
                <Link to="/blog">
                    Blog
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/feature">
                    Feature
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/keyboard">
                    Keyboard
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/insert">
                    Insert
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/Product">
                    Product
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/products">
                    ProductsPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/select">
                    SelectPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/tab">
                    TabPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/product">
                    ProductPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/caps">
                    CapsPage
                </Link>
            </ListGroup.Item>

            <ListGroup.Item>
                <Link to="/profile">
                    ProfilePage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/login">
                    Login
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/shift">
                    ShiftPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/gayatri">
                    GayatriPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/alt">
                    AltPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/window">
                    WindowPage
                </Link>
            </ListGroup.Item>

            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>Log Out</ListGroup.Item> */}
        </ListGroup>
    )
}
