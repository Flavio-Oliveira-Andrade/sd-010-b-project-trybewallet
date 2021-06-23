import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
