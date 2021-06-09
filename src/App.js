import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
// #Passo 02
// https://devpleno.com/router-props-2
// https://github.com/tryber/sd-10b-live-lectures/blob/lecture/16.5/students-register/src/actions/index.js
// https://blog.matheuscastiglioni.com.br/mantendo-estados-de-componentes-no-react-com-state/
// https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
