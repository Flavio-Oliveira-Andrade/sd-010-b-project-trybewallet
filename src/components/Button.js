import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, name, id } = this.props;
    return (
      <button data-testid={ id } type="button" onClick={ onClick }>{ name }</button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: '',
};
export default Button;
