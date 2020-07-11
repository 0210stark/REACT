import React, { Component } from 'react';

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  state = { term: 'Vidit' };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
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
