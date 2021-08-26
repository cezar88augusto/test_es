import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';
import { isValidEmail, isValidPassword } from '../functions';
import LoginForm from '../components/LoginForm';
import data from '../../src/data/db.json'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      validateEmail: false,
    };
    this.thereIsUserInData = this.thereIsUserInData.bind(this);
  }

  handleChange(event) {
    const { email, password } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    if (isValidEmail(email) && isValidPassword(password)) {
      this.setState({ validateEmail: true });
    } else {
      this.setState({ validateEmail: false });
    }
  }

  thereIsUserInData() {
    const { email, password } = this.state;
    const { loggin } = this.props;
    const isUser = data.some((user) => user.email === email && user.senha === password)
    if (!isUser) {
      return window.alert('Usuário não cadastrado ou senha incorreta.')
    }
    loggin(email)
  }

  render() {
    const { validateEmail } = this.state;
    const { logged } = this.props;
    if (logged) return (<Redirect to="/menu" />);
    return (
      <div>
        <LoginForm handleChange={this.handleChange} />
        <button
          type="button"
          disabled={!validateEmail}
          onClick={() => this.thereIsUserInData()}
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loggin: (email) => dispatch(login(email)),
});

const mapStateToProps = (state) => ({
  logged: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
