import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';
class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.getTermAndSearches('NASA');
  }
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
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar
          search={this.state.selectedVideo}
          getTerm={this.getTermAndSearches}
        />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
