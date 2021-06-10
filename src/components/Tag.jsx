import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { tags } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag">
          {tags.map((tag, key) => (
            <option key={ key }>
              { tag }
            </option>))}
        </select>
      </label>
    );
  }
}

export default Tag;
