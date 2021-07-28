import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useCase } from '../../utils/hooks';
import { API } from '../../utils/api';
import sampleState from '@store/sample-state';

export const fetchCaseById = createAsyncThunk(
  'docket/fetchByCaseId',
  async (id) => {
    const response = await API.fetchCaseById(id);
    console.log(response);
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
  },
  extraReducers: {
    [fetchCaseById.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCaseById.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      console.log(action.payload);
      state.events = action.payload.docketEntries;
    },
  },
});

export const { eventAdded, partyAdded } = docketSlice.actions;
export default docketSlice;
