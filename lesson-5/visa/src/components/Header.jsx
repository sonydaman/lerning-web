import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import "../style/header.css";


export const Header = () => {
    return (
      <Navbar bg="dark" variant="dark">
          <div className="container">
        <Navbar.Brand href="#title">FUNBOOK</Navbar.Brand>
            
        <Nav className="mr-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#friends">FRIENDS</Nav.Link>
          <Nav.Link href="#pricing">MORE</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </div>
      </Navbar>
      
    )
}
