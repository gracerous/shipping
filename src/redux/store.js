import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import themeReducer from './reducers/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer
  },
  middleware: [thunk]
});

export default store;