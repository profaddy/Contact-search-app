import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import store from "../../store"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

//var isLoggedIn = false


const PrivateRoute = ({ component: Component, ...rest,...props }) => {
	
	//let state = store.getState();
	//let isLoggedin1 = state.User.isLoggedin
	let local1 = JSON.parse(localStorage.getItem('myData'));

	return (
		 <Route {...rest} render={(props) => (

  
  local1 == true
      ? <Component {...rest} {...props} />
      : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    )} />
		)
}


export default connect(null)(PrivateRoute);

