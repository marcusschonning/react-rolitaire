import React, { Component } from 'react';

class AppComponent extends Component {
  render() {
    return(
      <div>
        <h1>Solitaire with React</h1>
        {this.props.children}
      </div>
    )
  }
}

export default AppComponent;
