import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div>
        <form
          className='ui form'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.term(this.state.term);
          }}
        >
          <div className='ui field'>
            <label htmlFor=''>Search </label>
            <input
              type='text'
              placeholder='Search'
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
