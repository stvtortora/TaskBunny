import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import NavBar from './nav_bar/nav_bar';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SignUpTaskerContainer from './session_form/signup_tasker_container';
import Register from './register/register';
import DashBoard from './dashboard/dashboard_container';
import Tasks from './dashboard/tasks_index'
import TaskersForm from './taskers_form/taskers_form';
import ConfirmTask from './confirm_task/confirm_task';
import DetailsForm from './details_form/details_form_container';
import RedirectHandler from './confirm_task/redirect_handler';
import Modal from './modal/modal';
import Footer from './footer/footer';

const App = () => (
  <div>
    <div className='main-content-container'>
      <Modal/>
      <Route path='/' exact component={DashBoard} />
      <Route path='/register' exact component={Register} />
      <Route path='/tasks' exact component={Tasks} />
      <Route path='/taskform/details' exact component={DetailsForm} />
      <Route path='/taskform/select_tasker' exact component={TaskersForm} />
      <Route path='/taskform/confirm_task' exact component={RedirectHandler}/>
      <Route path='/signup' exact component={SignUpFormContainer}/>
      <Route path = '/become-a-tasker' exact component={SignUpTaskerContainer}/>
      <Route path='/login' exact component={LogInFormContainer}/>
      </div>
    <Footer />
  </div>
);



export default App;
