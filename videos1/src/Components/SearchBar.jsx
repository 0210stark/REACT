import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className='searchbar ui segment'>
        <div className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
