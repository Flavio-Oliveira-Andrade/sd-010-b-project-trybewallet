import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          <input type="text" name="valor" disabled />
        </label>
      </form>
    );
  }
}
