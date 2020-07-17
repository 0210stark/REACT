import React, { Component } from 'react';
class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Search' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
