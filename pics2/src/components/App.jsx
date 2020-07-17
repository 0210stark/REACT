import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends Component {
  getTerm = (term) => {
    console.log(term);
  };
  state = { images: [] };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar term={this.getTerm} />
      </div>
    );
  }
}

export default App;
