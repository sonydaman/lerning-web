import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useLayout } from '../hooks/LayoutHook';
import "../style/header.css";


export const Header = () => {
    const {dispatch,state} = useLayout();
    const handelBtn = ()=>{
      dispatch({type:'decrement'})
    }
    return (
      <Navbar bg="dark" variant="dark">
          <div className="container-fluid">
        <Navbar.Brand href="#title"><h2>FUNBOOK</h2></Navbar.Brand>
            <Button onClick={handelBtn}> Decrease </Button>
        <Nav className="mr-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#friends">FRIENDS</Nav.Link>
          <Nav.Link href="#pricing">MORE</Nav.Link>
        </Nav>
        <p style={{color:'#fff'}}>{state.count}</p>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </div>
      </Navbar>
      
    )
}
