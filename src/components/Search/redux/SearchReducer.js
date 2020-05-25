import types from '../types';
// import {Map, fromJS} from 'immutable';

const initialState = {
  searchResults: []
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case types.setSearchResults: {
      return {
        searchResults: action.results
      };
    }
    default: {
      return state;
    }
  }
}

export default searchResults;
