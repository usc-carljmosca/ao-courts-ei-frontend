import React, { useReducer } from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';

const sampleCase = {
  caseNumber: '21-12345',
  leftParties: ['Ray Bradbury'],
  rightParties: ['Charles Bradbury'],
  events: [
    {
      date: { month: '10', day: '24', year: '2021' },
      eventType: 'motion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reference: '42',
    },
  ],
};

const initialState = {
  caseNumber: '21-12345',
  caption: 'Ray Bradbury v. Charles Bradbury',
  parties: [],
  events: [],
};

const docketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, parties: [...state.parties, action.party] };
    default:
      return state;
  }
};

const DocketEntry = () => {
  const [state, dispatch] = useReducer(docketReducer, initialState);

  return (
    <Layout>
      <SEO title="Docket Entry" />
      <DocketDetails courtCase={state} dispatch={dispatch} />
    </Layout>
  );
};

export default DocketEntry;
