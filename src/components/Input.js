import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    const { type, name } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        :
        <input type={ type } name={ name } id={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
