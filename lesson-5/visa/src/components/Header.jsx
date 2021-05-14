import React,{Fragment} from 'react'
import { Button, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useLayout } from '../hooks/LayoutHook';
import "../style/header.css";


export const Header = () => {
    const {dispatch,state} = useLayout();
    const handel= ()=>{
      // if(state.isLoggedIn)
      //   dispatch({type:'logOut'})
      // else
      //   dispatch({type:'loggedIn'})
      // state.isLoggedIn ? dispatch({type:'logOut'}) : dispatch({type:'loggedIn'})
      const isLoggedIn = state.isLoggedIn ? 'logOut' : 'loggedIn';
      dispatch({type:isLoggedIn})
    }
    // const handelBtn = ()=>{
    //   dispatch({type:'decrement'})
    // }
    return (
      <Navbar bg="dark" variant="dark">
          <div className="container-fluid">
        <Navbar.Brand href="#title"><h2>FUNBOOK</h2></Navbar.Brand>
        {/*     <Button onClick={handelBtn}> Decrease </Button> */}
        { state.isLoggedIn && 
            <Fragment>
        <Nav className="mr-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#friends">FRIENDS</Nav.Link>
          <Nav.Link href="#pricing">MORE</Nav.Link>
        </Nav>
        {/* <p style={{color:'#fff'}}>{state.count}</p> */}
        
       </Fragment>}
       {/* <Form inline>          
              <FormControl type="email" placeholder="abc@email.com" className="mr-sm-2" />
              <FormControl type="password" placeholder="Password" className="mr-sm-2" />  
        </Form> */}
        
        <div className="drop-btn">
        <DropdownButton
         menuAlign="right"
         >
          <Dropdown.Item className="drop" href="#/action-1">
          <div className="header-right">
            <img src="https://unsplash.it/100/180?id=4"  alt="" />
          </div>
          </Dropdown.Item>
          <Dropdown.Item className="drop"  href="#/action-2">Soni Daman</Dropdown.Item>
          <Dropdown.Item className="drop" href="#/action-3">Profile</Dropdown.Item>
          <Dropdown.Item className="drop" href="#/action-3">Setting</Dropdown.Item>
          <Dropdown.Item className="drop" href="#/action-3">Sign Out</Dropdown.Item>
        </DropdownButton>
        </div>
       {/* <Button onClick={handel}>
            {state.isLoggedIn ? 'Sign Out' : 'Login'}
          </Button> */}
      </div>
      </Navbar>
      
    )
}
