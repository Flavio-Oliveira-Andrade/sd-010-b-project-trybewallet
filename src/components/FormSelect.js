import React from 'react';
import PropTypes from 'prop-types';

class FormSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
    };
    this.functionSetLocalState = this.functionSetLocalState.bind(this);
  }

  componentDidMount() {
    this.functionSetLocalState();
  }

  functionSetLocalState() {
    const { array } = this.props;
    this.setState({ array });
  }

  render() {
    const { texto, titulo, testid, funcao } = this.props;
    const { array } = this.state;
    return (
      <label htmlFor={ texto }>
        {titulo}
        <select
          id={ texto }
          data-testid={ testid }
          onChange={ funcao }
        >
          {
            array.map((string, index) => (
              <option
                name={ texto }
                key={ index }
              >
                {string}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  texto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(String).isRequired,
  funcao: PropTypes.func.isRequired,
};

export default FormSelect;
