import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Form extends React.Component {
	constructor() {
		super();
	}

	this.state = {
		valor: '',
		description: '',
		currency: '',
		method: '',
		despesas: '',
	};
};

render() {

	return (
		<form>
			<label htmlFor="value">
				Valor
				<input
					type="number"
					id="value"
					onChange={ this.handleChange}
				/>
			</label>
			<label htmlFor="description">
				Descrição
				<input
					type="text"
					id="description"
					onChange={ this.handleChange}
				/>
			</label>
			<label htmlFor="currency">
				Moeda
				<select
					id="currency"
					onChange={ this.handleChange}
				>
				</select>
			</label>

			<label htmlFor="method">
				Método de Pagamento
				<select
					type=""
					id=""
					onChange={ this.handleChange}
				>
				</select>
			</label>
		</form>
	)
};