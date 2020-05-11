import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Callback extends Component {
  async componentDidMount() {
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);
