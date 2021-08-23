import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';
import { isValidEmail, isValidPassword } from '../functions';
import LoginForm from '../components/LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      validateEmail: false,
    };
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

  render() {
    const { validateEmail, email } = this.state;
    const { loggin, logged } = this.props;
    if (logged) return (<Redirect to="/cadastro" />);
    return (
      <div>
        <LoginForm handleChange={this.handleChange}/>
        <button
          type="button"
          disabled={!validateEmail}
          onClick={() => loggin(email)}
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
