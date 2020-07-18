import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'
const KEY = 'AIzaSyDl_tkYkWptJsX5oFCHmUGSz-7J19qVHUQ';

class App extends Component {
   onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
  state = {};
  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
