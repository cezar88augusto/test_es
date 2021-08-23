import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
        <Link to="/management">
          Voltar
        </Link>
        <h1>Delete User</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
