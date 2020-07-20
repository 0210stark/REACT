import React from 'react';

const VideoItem = ({ video }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <div>
      <img src={thumbnail} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
