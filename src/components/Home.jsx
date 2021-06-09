import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
          <form>
            <label htmlFor="user-email">
              <input
                type="text"
                name="email"
                placeholder="Usuário"
                data-testid="email-input"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="user-password">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                data-testid="password-input"
                onChange={this.handleChange}
              />
            </label>
            <Link to="/carteira">
              <button type="submit">Entrar</button>
            </Link>
          </form>
        </div>
      </main>
    );
  }
}

export default Home;