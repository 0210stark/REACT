import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';
class App extends Component {
  state = { videos: [], selectedVideo: '' };

  getTermAndSearches = async (term) => {
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

  onVideoSelect = (video) => {
    console.log('From App', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar getTerm={this.getTermAndSearches} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
