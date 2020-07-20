import React, { Component } from 'react';
class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getTerm(this.state.term);
  };

  // handleInputChange = (event) => {
  //   this.setState({ term: event.target.value });
  // };

  render() {
    return (
      <div>
        <div className='ui segment'>
          <form className='ui form' onSubmit={this.onFormSubmit}>
            <div className='ui field'>
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
      </div>
    );
  }
}

export default SearchBar;
