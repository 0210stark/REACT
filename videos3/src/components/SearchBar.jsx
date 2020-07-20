import React, { Component } from 'react';
class SearchBar extends Component {
  state = { term: '' };
  render() {
    return (
      <div className='ui segment'>
        <form
          className='ui form'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.getTerm(this.state.term);
          }}
        >
          <div className='ui field'>
            <label>Vidoe Search</label>
            <input
              type='text'
              placeholder='search'
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
