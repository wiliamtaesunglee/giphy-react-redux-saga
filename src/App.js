import React from 'react';
import { Provider } from 'react-redux';

import store from './store/createStore';

import Search from './components/Search';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
