import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/index';
import { isValidEmail, isValidPassword } from '../functions';

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
        <div>
          <label htmlFor="email-input">
            E-mail:
            <input
              data-testid="email-input"
              name="email"
              type="email"
              required="required"
              pattern="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password-input">
            Password:
            <input
              data-testid="password-input"
              name="password"
              type="password"
              required="required"
              onChange={this.handleChange}
            />
          </label>
        </div>
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
