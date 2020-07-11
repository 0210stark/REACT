import React, { Component } from 'react';

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };
  state = { term: 'Cars' };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
