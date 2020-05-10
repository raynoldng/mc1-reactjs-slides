import React from 'react';

export default class StatefulApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isShow: true,
    };
  }
 
  render() {
    const greeting = 'Welcome to React';
    return (
      <div>
        {this.state.isShow ? <Greeting greeting={greeting} /> : null}
 
        <button onClick={
          () => this.setState(state => ({ isShow: !state.isShow }))
        } type="button">
          Toggle Show
        </button>
      </div>
    );
  }
}
 
const Greeting = ({ greeting }) => <h1>{greeting}</h1>;