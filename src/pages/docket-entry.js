import React, { useReducer } from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.event] };
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
