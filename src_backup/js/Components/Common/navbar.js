
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from 'react-router';
import Header from '../Common/header.js'
import { Button, Modal,Navbar,MenuItem,NavDropdown,NavItem,Nav} from "react-bootstrap";


export default class Mynavbar extends React.Component {


    handleonSubmit(e){

        e.preventDefault();
        localStorage.setItem('myData',false);   
        this.props.history.push('/')                                                                                                                                                    
    }


  render() {
    console.log(this.props.history)
    const path = this.props.history.location.pathname
    console.log(path)
      return(

          <Navbar  collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">IMMS</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1}  activeclassname="active" href='/home' >Home</NavItem>
                  <NavItem eventKey={2}  activeclassname="active" href="/aboutus" >Aboutus</NavItem>
                  <NavItem eventKey={3}  activeclassname="active" href="/summary" >Summary</NavItem>
                  
                  <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1} href='/home'>Home</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={4.2} href='/aboutus'>About Us</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={4.3} onClick = {this.handleonSubmit.bind(this)}>Logout</MenuItem>
                      <MenuItem divider />
                  </NavDropdown>

                </Nav>

                <Nav pullRight >
                  <NavItem eventKey={1}  onClick = {this.handleonSubmit.bind(this)} activeClassName="active" href="/home" >Logout</NavItem>
                </Nav>
               
                </Navbar.Collapse>
          </Navbar>
      );

  }
}