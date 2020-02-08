import React, { Component } from 'react'
import {Navbar, Nav , Container}from 'react-bootstrap'
import NavBar from '../component/NavBar/NavBar'
import style from './CustomNavBar.module.css';


 function CustomeNavBar() {
    return (

        <div className={style.navbar}>   
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                        alt="" 
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    LUNDAPP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <NavBar />
                    </Nav>
              </Navbar>
        </div>
        
    )
}

export default CustomeNavBar