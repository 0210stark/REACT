import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';

class App extends Component {
  state = { videos: [], selectedVideo: null };
  getTermAndSubmit = async (term) => {
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
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar getTerm={this.getTermAndSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
