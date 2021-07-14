import { createSlice } from '@reduxjs/toolkit';

const docketSlice = createSlice({
  name: 'docket',
  initialState: {
    caption: '',
    number: '',
    parties: [],
    events: [],
  },

  reducers: {
    addParty: (state, action) => state.parties.push(action.party),
    addEvent: (state, action) => state.events.push(action.event),
  },
});

export default docketSlice;
