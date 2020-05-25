import types from '../types';
import {Map} from 'immutable';

const initialState = Map({
  searchResults: []
});

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case types.addSearchResults: {
      return state.merge({
        searchResults: action.results
      });
    }
    default: {
      return state;
    }
  }
}

export default searchResults;
