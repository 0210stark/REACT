import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends Component {
  getTerm = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };
  state = { images: [] };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar term={this.getTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
