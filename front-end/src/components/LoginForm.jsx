import React from 'react';

class Login_Form extends React.Component {
  render() {
    const {
      handleChange,
    } = this.props;
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Login_Form;