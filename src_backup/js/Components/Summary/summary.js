import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { history } from 'react-router';
import Mynavbar from '../Common/navbar.js'
import { Button, Modal } from "react-bootstrap";


export default class Summary extends React.Component {
  render() {
		console.log('summary history', this.props.history)
    return (

		<div class='container no-gutters'>
            <div class='row'>
               

                <div className='col-sm-12'>
                    <Mynavbar history = {this.props.history}/>
                </div>




                <div className='Login-wrapper col-sm-6 justify-content-center'>
                   <h6>Summar-first-halfy</h6>
                   <p>  <b>What is Lorem Ipsum?</b><br />
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
						 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
						 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</p>
                </div>  

                <div className='Login-wrapper col-sm-6 justify-content-center'>
                   <h6>Summary-second-half</h6>
                </div>  
            </div>   
        </div>
    );
  }
}
