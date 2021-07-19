import { createSlice } from '@reduxjs/toolkit';
import sampleState from '@store/sample-state';

const docketSlice = createSlice({
  name: 'docket',
  initialState: sampleState,

  reducers: {
    partyAdded: (state, action) => {
      state.parties.push(action.party);
    },
    eventAdded: (state, action) => {
      state.events.push(action.payload.event);
    },
  },
});

export const { eventAdded, partyAdded } = docketSlice.actions;
export default docketSlice;
