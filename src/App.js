import React from 'react';
import { Provider } from 'react-redux';

import store from './store/createStore';

import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <Results />
    </Provider>
  );
}

export default App;
