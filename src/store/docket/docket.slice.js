import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useCase } from '../../utils/hooks';
import { API } from '../../utils/api';
import sampleState from '@store/sample-state';

export const fetchCaseById = createAsyncThunk(
  'docket/fetchByCaseId',
  async (id) => {
    const response = await API.fetchCaseById(id);
    return response.caseData;
  }
);

const docketSlice = createSlice({
  name: 'docket',
  initialState: sampleState,

  reducers: {
    captionAdded: (state, action) => {
      state.caption = action.caption;
    },
    partyAdded: (state, action) => {
      state.parties.push(action.party);
    },
    eventAdded: (state, action) => {
      state.events.push(action.payload.event);
    },
    deletedAllEvents: (state) => {
      console.log('Baleeted?');
      state.events = [];
      console.log(state);
    },
  },
  extraReducers: {
    [fetchCaseById.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCaseById.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.caption = action.payload.title;
      state.events = action.payload.docketEntries;
    },
  },
});

export const { eventAdded, partyAdded, deletedAllEvents } = docketSlice.actions;
export default docketSlice;
