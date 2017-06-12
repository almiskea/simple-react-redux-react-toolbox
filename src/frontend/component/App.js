import React, { Component } from 'react';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

export default class App extends Component {
  render() {
    return (
    <div>
      <PurpleAppBar />
      <section style={{ padding: 20 }}>
        {this.props.children}
        </section>
    </div>
  );
  }
}
