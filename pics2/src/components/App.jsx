import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends Component {
  getTerm = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization:
          'Client-ID c67e1fe9281d943f4ed47c6f5068097bb79317daea4cee5ffdc705d0e620d416',
      },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };
  state = { images: [] };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar term={this.getTerm} />
        Found : {this.state.images.length}
      </div>
    );
  }
}

export default App;
