import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute } from '../util/router_util';
import NavBar from './nav_bar/nav_bar';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DashBoard from './dashboard/dashboard_container';

import DetailsForm from './details_form/details_form_container';

const App = () => (
  <div>
    <Route path='/' exact component={DashBoard} />
    <Route path='/taskform/details' exact component={DetailsForm} />
    <AuthRoute path='/login' exact component={LogInFormContainer}/>
    <AuthRoute path='/signup' exact component={SignUpFormContainer}/>
  </div>
);

// <Route path='/' exact component={NavBar} />


export default App;
