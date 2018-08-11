import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Button,Modal,closeButton} from 'react-bootstrap';
//import UserLogin from '../../Login&Signup/User_login/user_login';
import Header from '../Common/header.js'
import '../Common/header.css'
import Mynavbar from '../Common/navbar'
//import './header.css'

export default class Aboutus extends React.Component {

		constructor(props){
      
    super(props);
    
    this.state={
        
    };
    
   
  }


render() {
   
    console.log(this.props)

    return (
    	<div class='container no-gutters'>
            <div class='row'>
               

                <div className='col-sm-12'>
                    <Mynavbar history = {this.props.history}/>
                </div>


                <div className='Login-wrapper col-sm-6 justify-content-center'>
                   <h6>ABOUT US</h6>
                </div>  
            </div>   
        </div>
    	);
    }
}