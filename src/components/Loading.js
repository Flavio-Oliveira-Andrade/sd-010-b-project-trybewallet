import React from 'react';
import loadingGif from '../images/loading-buffering.gif';

export default class Loading extends React.Component {
  render() {
    return (
      <>
        <image src={ loadingGif } />
        <h1>Carregando...</h1>
      </>
    );
  }
}
