import React from 'react';
import { Redirect } from 'react-router';
import { creatUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state
}

  render() {
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
      </div>
    );
  }
}

export default Login;
