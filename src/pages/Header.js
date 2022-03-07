import React from 'react';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
    this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    getUser()
      .then((resolved) => this.setState({ name: resolved.name }))
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const {
      name,
      loading,
    } = this.state;
    return (
      <header data-testid="header-component">
        <h1>Header</h1>
        { loading
          ? <Loading />
          : <h2 data-testid="header-user-name">{name}</h2> }
      </header>
    );
  }
}

export default Header;
