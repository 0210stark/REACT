import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar getTerm={this.onTermSubmit} />
        <h2>I have {this.state.videos.length}</h2>
      </div>
    );
  }
}

export default App;
