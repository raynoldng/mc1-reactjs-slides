import React from 'react';

export default class ComposedApp extends React.Component {
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}
 
class Greeting extends React.Component {
  render() {
    // want to pass greeting as a props
    const greeting = 'Composing React Components';
    return <h1>{greeting}</h1>;
  }
}
