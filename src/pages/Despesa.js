import React from 'react';

class Despesa extends React.Component {
  render() {
    return (
      <div>
        ola mundo
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  despesa: state.state,
});

export default Despesa;
