import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: '' };
  render() {
    return (
      <div className='ui segment'>
        <form
          className='ui form'
          onSubmit={(event) => {
            event.preventDefault();
            this.props.submitEntered(this.state.term);
          }}
        >
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            {/* <input onChange={this.onInputChange} type='text' /> */}
            {/* <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              type='text'
            /> */}
            <input
              placeholder='Search'
              type='text'
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
