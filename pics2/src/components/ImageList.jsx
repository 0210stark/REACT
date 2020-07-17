import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imgs = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div>{imgs}</div>;
};

export default ImageList;
