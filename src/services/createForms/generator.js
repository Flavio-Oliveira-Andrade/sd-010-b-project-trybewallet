import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import Select from './elements/Select';

class CreateElement extends Component {
  render() {
    const { forms } = this.props;
    return forms.map((e, idx) => {
      const props = { key: `formExp - ${idx}`, ...e };
      return e.options ? <Select { ...props } /> : <Input { ...props } />;
    });
  }
}

CreateElement.propTypes = {
  forms: PropTypes.arrayOf(),
}.IsRequeried;

export default CreateElement;
