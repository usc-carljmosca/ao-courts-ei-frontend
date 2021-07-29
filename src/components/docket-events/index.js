import React from 'react';
import DocketTable from '@components/docket-table';
import AddEventForm from '@components/add-event-form';
import { Link } from 'gatsby';

const DocketEvents = ({ isRecordOnAppeal }) => {
  return (
    <section>
      {!isRecordOnAppeal && (
        <>
          <h3 id="all_events">Docket</h3>
          <p className="instructions">
            Ensure the docket is complete here.{' '}
            <Link to="#add-event-form">Add any missing entries</Link> below.
          </p>
        </>
      )}
      <DocketTable isRecordOnAppeal={isRecordOnAppeal} />
      {!isRecordOnAppeal && <AddEventForm />}
    </section>
  );
};

export default DocketEvents;
