import React, { Component } from 'react';
class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className='ui segment'>
        <form
          action=''
          className='ui form'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.submitTerm(this.state.term);
          }}
        >
          <div className='ui field'>
            <label>Search</label>
            <input
              type='text'
              placeholder='Search...'
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
