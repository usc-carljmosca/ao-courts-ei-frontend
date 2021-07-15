import React from 'react';
import { navigate } from 'gatsby';
import DocketTable from '@components/docket-table';
import { useDispatch } from 'react-redux';
import { eventAdded } from '@store/docket/docket.slice';
import AddEventForm from '@components/add-event-form';

const DocketEvents = ({ isRecordOnAppeal }) => {
  return (
    <section>
      <h4 id="all_events">Compile Record on Appeal</h4>
      <p>Select docket entries to include in the Record on Appeal</p>
      <DocketTable isRecordOnAppeal={isRecordOnAppeal} />
      {isRecordOnAppeal ? '' : <AddEventForm />}
    </section>
  );
};

export default DocketEvents;
