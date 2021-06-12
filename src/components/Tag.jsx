import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { handleChange } = this.props;
    const { tags } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ handleChange }>
          {tags.map((tag, key) => (
            <option key={ key }>
              { tag }
            </option>))}
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  handleChange: PropTypes.func,
};

Tag.defaultProps = {
  handleChange: '',
};

export default Tag;
