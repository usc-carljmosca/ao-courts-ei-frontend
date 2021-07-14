import { createSlice } from '@reduxjs/toolkit';

const docketSlice = createSlice({
  name: 'docket',
  initialState: {
    caption: 'US v. Carpenter',
    number: '21-12345',
    parties: [],
    events: [],
  },

  reducers: {
    addParty: (state, action) => {
      state.parties.push(action.party);
    },
    addEvent: (state, action) => {
      state.events.push(action.payload.event);
    },
  },
});

export const { addEvent, addParty } = docketSlice.actions;
export default docketSlice;
