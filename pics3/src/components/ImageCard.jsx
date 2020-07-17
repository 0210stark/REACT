import React, { Component } from 'react';
class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRed = React.createRef();
  }
  state = {};

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };
  render() {
    return (
      <img
        ref={this.imageRef}
        src={this.props.image.urls.regular}
        alt={this.props.description}
      />
    );
  }
}

export default ImageCard;
