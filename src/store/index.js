import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export default createStore;
