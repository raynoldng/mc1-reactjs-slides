import React from 'react';

export default class Hello extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

export const functionalHello = () => {
  return <h1>Hello functional world!</h1>;
}