import React, { Component } from 'react'
import { Redirect,history} from 'react-router-dom';
import { connect } from "react-redux"
import {form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'
import {setUserName,setUserPwd,setUserdetails,fetchUser} from '../Actions/userActions';


class Login extends React.Component {

	constructor(){
	super();
	this.state={

		value1:'',
		isLoggedin:'',
		redirectToReferrer: false
	};

	this.handleonSubmit.bind(this);
	this.handleChange.bind(this);
	this.getValidationState.bind(this);

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
			this.props.dispatch(fetchUser())

			let local_user_list = JSON.parse(localStorage.getItem('user_list'))

			let found = local_user_list.find(function a(x) {

			 return  x.user_name1 === user_name

			});
			if (found !== undefined ){

				localStorage.setItem('myData',true);

				if (this.props.location === undefined){
					console.log('test',this.props.history)
					var { from } = { from: { pathname: "/" } };
		    		var redirectToReferrer  = this.props.User.user.redirectToReferrer;
		    		this.props.history.push(`${from.pathname}`)
		        }else{
					var { from } = this.props.location.state || { from: { pathname: "/" } };
					console.log('t')
			    	var redirectToReferrer  = this.props.User.user.redirectToReferrer;
			    	this.props.history.push(`${from.pathname}`)
				}
				
			}else{

				alert('user Validation failed ')

			}

		}else{

			alert('Enter 7 digit Commit id')

		}


		this._user_name.value = ''

	}

	render() {

       	return (
		

			<div>

				<div class='col-sm-6 Login_form'>
					<h3>Login</h3>
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
						<button type='submit' class='Login_button' onClick = {this.handleonSubmit.bind(this)} > Login</button>	
		
				</div>

			</div>
				
      		 );			

	}
}

	const mapStateToProps = state =>  ({
		
	  User : state.User
	    
		
	});



export default connect(mapStateToProps)(Login);
