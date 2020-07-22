import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {}, [term]);

  return (
    <div className='ui form'>
      <div className='field'>
        <label>Enter search term</label>
        <input
          className='input'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;