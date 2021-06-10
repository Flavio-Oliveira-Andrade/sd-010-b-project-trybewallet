import React, { Component } from 'react';

import loadingGif from '../images/loading-buffering.gif';

export default class LoadingPage extends Component {
  render() {
    return (
      <div className="loading">
        <img src={ loadingGif } alt="loading gif" />
        <h1>Loading...</h1>
      </div>
    );
  }
}
