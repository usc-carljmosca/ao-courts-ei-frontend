import React from 'react';
import DocketTable from '@components/docket-table';
import AddEventForm from '@components/add-event-form';

const DocketEvents = ({ isRecordOnAppeal }) => {
  return (
    <section>
      {isRecordOnAppeal ? '' : <h3 id="all_events">Docket</h3>}
      <p>Select docket entries to include in the Record on Appeal</p>
      <DocketTable isRecordOnAppeal={isRecordOnAppeal} />
      {isRecordOnAppeal ? '' : <AddEventForm />}
    </section>
  );
};

export default DocketEvents;
