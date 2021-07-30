import React from 'react';
import DocketEvents from '@components/docket-events';
import PanelPicker from '@components/panel-picker';
import CourtPicker from '@components/court-picker';

const RecordDetails = ({ isAppellate }) => {
  return (
    <>
      <li className="usa-process-list__item">
        <h3 className="usa-process-list__heading">
          Select events and documents comprising record
        </h3>
        <DocketEvents isRecordOnAppeal={true} />
      </li>
      <li className="usa-process-list__item">
        {isAppellate ? (
          <>
            <h3 className="usa-process-list__heading">
              Select panel to hear case
            </h3>
            <PanelPicker />
          </>
        ) : (
          <>
            <h3 className="usa-process-list__heading">
              Select court to receive case
            </h3>
            <CourtPicker />
          </>
        )}
      </li>
      <li className="usa-process-list__item">
        <h3 className="usa-process-list__heading">
          Send case to {isAppellate ? 'panel' : 'court'}
        </h3>
        <button
          className="usa-button usa-button--secondary usa-button--big transmit-record"
          onClick={() => alert('transmitted')}
        >
          Transmit Record
        </button>
      </li>
    </>
  );
};

export default RecordDetails;
