import React, { Component } from 'react';

class SearchBar extends Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO Call back from the api
  };
  state = { term: '' };
  render() {
    return (
      <div className='searchbar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
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
        </form>
      </div>
    );
  }
}

export default SearchBar;
