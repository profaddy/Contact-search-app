import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Button,Modal,closeButton} from 'react-bootstrap';
//import UserLogin from '../../Login&Signup/User_login/user_login';
//import './header.css'

export default class Header extends React.Component {

		constructor(props){
      
    super(props);
    
    this.state={
        
    };
    
   
  }


    handleonSubmit(e){

        e.preventDefault();
        localStorage.setItem('myData',false);                                                                                                                                                       
    }

render() {
   
    console.log(this.props)

    return (
    	<div>
    	
    		<h3>MMD</h3>
            
    	
    	</div>
    	);
    }
}