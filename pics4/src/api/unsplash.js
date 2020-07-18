import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c67e1fe9281d943f4ed47c6f5068097bb79317daea4cee5ffdc705d0e620d416',
  },
});
