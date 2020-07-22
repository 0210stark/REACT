import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {}, []);

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
