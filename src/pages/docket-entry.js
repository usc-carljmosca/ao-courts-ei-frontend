import React from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useDispatch } from 'react-redux';
import { deletedAllEvents } from '@store/docket/docket.slice';
import Alert from '@components/alert';

const DocketEntry = ({ location }) => {
  const dispatch = useDispatch();
  const deleteEvents = location.state && location.state.deleteEvents;
  const fromBanner = location.state && location.state.fromBanner;

  if (deleteEvents) {
    dispatch(deletedAllEvents());
  }

  return (
    <Layout>
      <SEO title="Docket Entry" />

      {deleteEvents && (
        <div className="grid-container">
          <Alert type="info" heading="Docket events deleted">
            You can now manually recreate the docket before compiling the Record
          </Alert>
        </div>
      )}

      {fromBanner && !deleteEvents && (
        <div className="grid-container">
          <Alert type="info" heading="Docket imported">
            Ensure the docket is complete before compiling the Record
          </Alert>
        </div>
      )}

      <DocketDetails />
    </Layout>
  );
};

export default DocketEntry;
