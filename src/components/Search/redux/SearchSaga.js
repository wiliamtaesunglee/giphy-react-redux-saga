import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import types from '../types';

function* setSearch(value) {
  try {
    const key = 'jLpQEa07o6sNkAcA1PLnD3aKAS7zSNCv';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${value}?limit=20`;
    const request = yield axios.get(url);
    console.log(request.data.data);
  
  } catch (error) {
    console.log(error);
  }
};

function* watchSearch() {
  yield takeLatest(types.watchGetSearchResults, setSearch)
};

export default watchSearch;
