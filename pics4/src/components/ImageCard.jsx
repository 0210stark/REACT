import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };
  state = {};
  render() {
    return (
      <img
        ref={this.imageRef}
        src={this.props.image.urls.regular}
        alt={this.props.image.description}
      />
    );
  }
}

export default ImageCard;
