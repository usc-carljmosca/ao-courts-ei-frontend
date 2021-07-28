import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { fetchCaseById } from '@store/docket/docket.slice';

const DataProvider = ({ children }) => {
  // Hydrate on load
  const dispatch = useDispatch();
  dispatch(fetchCaseById(2));
  return children;
};

export default ({ element }) => {
  return (
    <Provider store={store}>
      <DataProvider>{element}</DataProvider>
    </Provider>
  );
};
