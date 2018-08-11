import React, { Component } from 'react'
import { Redirect,history} from 'react-router-dom';
import { connect } from "react-redux"
import {form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails,fetchUser} from '../Actions/userActions';
//import UserSignup from '../Signup/user_signup';
//import './user_login.css';
//import axios from 'axios';
//import {Toggle_login,Toggle_login_off,Toggle_signup,Toggle_signup_off,USER_LOGIN} from "../../../actions/modalactions"

//axios.defaults.headers.post['Content-Type'] = 'application/json';

class Signup extends React.Component {

	constructor(){
	super();
	this.state={

		value1:'',
	    list:[]
	};

	this.handleonSubmit.bind(this);
	this.handleChange.bind(this);
	this.getValidationState.bind(this);
	//this.handleSignup.bind(this);
	}


	getValidationState(){

	const length=this.state.value1.length
	if (length === 7) return'success';
		else if (length <= 7 && length > 0) return'warning';
		return null;

	}

	handleChange(e){

		this.setState({ value1: e.target.value});
	}

	handleonSubmit(e){

		e.preventDefault();
		const length=this.state.value1.length



		if (length === 7) {
			
			var user_name = this._user_name.value
		
			var user_details = {

				user_name1: user_name

			}
			
			this.props.dispatch(setUserName(user_details));
			

			
			//this.props.history.push('/login')

			
		}else{

			alert('Enter 7 digit Commit id')
			console.log('Enter 7 digit Commit id ')

		}


		this._user_name.value = ''

	}

	render() {
		
			var temp = JSON.parse(localStorage.getItem('user_list'));
			console.log('localstorage',temp)
	
       	return (
		

			<div>

				<div class='col-sm-6 Login_form'>
					<h3>Signup</h3>
					<p>Enter your commit id </p>
						<form onSubmit = {this.handleonSubmit.bind(this)}>
							<FormGroup controlId="formBasicText" validationState={this.getValidationState()}> 
								<FormControl
						            type="text"
						            value={this.state.value1}
						            placeholder="Enter Commit ID"
						            onChange={(event) => this.handleChange(event)}
						            inputRef={(a) => this._user_name = a}
					         	 />

							<FormControl.Feedback />
							</FormGroup>		
						</form>							
							
						<button type='submit' class='Signup_button' onClick = {this.handleonSubmit.bind(this)} >Signup</button>
				</div>

			</div>
				
      		 );			

	}
}

	const mapStateToProps = state =>  ({
		
	  User : state.User
	    
		
	});



export default connect(mapStateToProps)(Signup);
