import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const searchResults = useSelector(state => state.search.searchResults);
  
  return (
    <>
      {searchResults.map(item => {
        return (
          <img src={item.images.original.url} key={item.id} alt='gif' />
        )
      })}
      <p>gifs</p>
    </>
  )
};

export default Results;
