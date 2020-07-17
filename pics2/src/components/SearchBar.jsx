import React, { Component } from 'react';
class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input
              type='text'
              placeholder='Search'
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
