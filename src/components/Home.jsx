import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <main>
        <header>
          <h1 className="home-title">
            Home
          </h1>
        </header>
        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="Usuário"
              data-testid="email-input"
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
            />
          </label>
        </div>
      </main>
      
    );
  }
}

export default Home;