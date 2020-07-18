import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';
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
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar submitTerm={this.getTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
