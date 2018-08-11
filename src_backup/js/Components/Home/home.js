import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from 'react-router';
import Header from '../Common/header';
import Login from '../Login/login';
import Signup from '../Signup/signup';
import './home.css'
import { Button, Modal } from "react-bootstrap";
import Mynavbar from '../Common/navbar'
//import Mysidebar from '../Common/sidebar'


export default class Home extends React.Component {
  render() {
		console.log(this.props.history)
    return (

		<div class='container no-gutters'>
			<div class='row'>
				

				<div className='col-sm-12'>
					<Mynavbar history = {this.props.history}/>
				</div>
				
				<div className='Login-wrapper col-sm-6 justify-content-center'>
					<Login history = {this.props.history} />  
				</div>	

				<div className='Login-wrapper col-sm-6 justify-content-center'>
					<Signup history = {this.props.history} />  
				</div>	

				
			</div>   
		</div>
    );
  }
}
