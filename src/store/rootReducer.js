import { combineReducers } from 'redux';
import docketSlice from './docket/docket.slice';
export default combineReducers({ docket: docketSlice.reducer });
