import React from 'react';
import PropTypes from 'prop-types';

class buttonAdd extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ onClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

buttonAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default buttonAdd;
