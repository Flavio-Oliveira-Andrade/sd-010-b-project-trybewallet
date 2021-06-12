import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Value.propTypes = {
  handleChange: PropTypes.func,
};

Value.defaultProps = {
  handleChange: '',
};

export default Value;
