import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className='container'>
        <h1>Acme Products - (with Redux)</h1>
        { this.props.children }
      </div> 
    );
  }
}

export default App;