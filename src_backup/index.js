import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./js/store"
import Home from './js/Components/Home/home';
import Login from './js/Components/Login/login';
import Aboutus from './js/Components/Aboutus/aboutus';
import Summary from './js/Components/Summary/summary';
import registerServiceWorker from './registerServiceWorker';
import PrivateRoute from './js/Components/Privateroute/privateroute';

import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
	
  <Provider store={store}>
    
    <Router>
    <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/aboutus" component={Aboutus} />
         <PrivateRoute Route  exact path="/summary" component={Summary} />


         
      </Switch>
    </Router>
   
  </Provider>,
 document.getElementById('root')

	);
