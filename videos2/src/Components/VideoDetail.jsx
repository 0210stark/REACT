import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h3>Loading..</h3>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
