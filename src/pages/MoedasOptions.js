import React from 'react';
import PropTypes from 'prop-types';

class MoedasOptions extends React.Component {
  constructor() {
    super();
    this.getCurr = this.getCurr.bind(this);
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.getCurr();
  }

  async getCurr() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await result.json();
    const moedas = Object.keys(data);
    moedas.splice(1, 1);
    this.setState({ moedas });
  }

  render() {
    const { moedas } = this.state;
    const { handleChange } = this.props;
    return (
      <label htmlFor="moeda">
        moeda
        <select id="moeda" name="currency" onClick={ handleChange }>
          {moedas.map((moedaName) => (
            <option key={ moedaName } value={ moedaName }>
              {moedaName}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

MoedasOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default MoedasOptions;
