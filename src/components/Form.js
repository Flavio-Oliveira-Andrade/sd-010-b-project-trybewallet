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
		moeda: '',
		metodo: '',
		despesas: '',
	};
};

render() {
	return (
		<form>
			<label>
				<input
				/>
			</label>
		</form>
	)
};