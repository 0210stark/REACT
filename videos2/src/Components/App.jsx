import React, { Component } from 'react'
import youtube from '../api/youtube'

const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';
class App extends Component {
  state = {videos}
  
  getTermAndSearches = async (video) => {
   const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });
}

  render() { 
    return (  );
  }
}
 
export default App;