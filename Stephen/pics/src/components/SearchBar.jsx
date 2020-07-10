import React, { Component } from 'react';

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input type='text' onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}
