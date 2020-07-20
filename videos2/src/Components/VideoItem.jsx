import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <div className=' video-item item'>
      <img src={thumbnail} className='ui image' />
      <div className='content'>
        <div className='header'> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
