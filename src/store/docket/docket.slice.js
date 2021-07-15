import { createSlice } from '@reduxjs/toolkit';

const docketSlice = createSlice({
  name: 'docket',
  initialState: {
    caption: 'US v. Carpenter',
    number: '21-12345',
    parties: [
      { partyName: 'Timothy Carpenter', partyDesignation: 'Defendant' },
      { partyName: 'United States', partyDesignation: 'Government' },
    ],
    events: [],
  },

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
