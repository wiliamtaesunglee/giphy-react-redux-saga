import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchResults } from './action';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const onInputChange = event => {
    event.preventDefault();
    console.log(value)
    if (value) {
      dispatch(getSearchResults(value))    
    }
  }

  return (
    <form onSubmit={event => onInputChange(event)}>
      <input type='text' onChange={e => setValue(e.target.value)}/>
      <input type='submit'/>
    </form>
  )
};




export default Search;