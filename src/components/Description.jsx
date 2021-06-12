import React from 'react';

class Description extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  handleChange: PropTypes.func,
};

Description.defaultProps = {
  handleChange: '',
};

export default Description;
