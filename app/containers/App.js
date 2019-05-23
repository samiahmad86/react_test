import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from './DevTools';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
