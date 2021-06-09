import React, { Component } from 'react';
import store from '../store/index';

export default class Wallet extends Component {
  constructor() {
    super();

    this.user = this.user.bind(this);
  }

  user() {
    const { user: { email } } = store.getState();
    return email;
  }

  render() {
    return (
      <div>
        <span>
          { this.user() ? `Login feito com sucesso, seu email é ${this.user()}` : ''}
        </span>
      </div>
    );
  }
}
