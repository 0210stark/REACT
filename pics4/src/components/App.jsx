import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
class App extends Component {
  getTermAndFetch = async (term) => {
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
        <SearchBar getTerm={this.getTermAndFetch} />
      </div>
    );
  }
}

export default App;
