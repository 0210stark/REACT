import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videos = videos.map((video) => {
    return <VideoItem />;
  });
  return <div></div>;
};

export default VideoList;
