import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { getSearchResults } from './action';

const Search = () => {
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    console.log(e.target.value)
    if (e.target.value) {
      dispatch(getSearchResults(e.target.value))    
    }
  }

  return (
    <>
      <input onChange={e => onInputChange(e)} />
    </>
  )
};




export default Search;