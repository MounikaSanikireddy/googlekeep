// App.js

import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./components/redux/store"
import Note from './components/Note';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Google Keep</h1>
        <Note />
      </div>
    </Provider>
  );
}

export default App;
