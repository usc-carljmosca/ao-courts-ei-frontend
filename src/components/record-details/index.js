import React from 'react';
import DocketEvents from '@components/docket-events';
import { useSelector } from 'react-redux';
import PanelPicker from '@components/panel-picker';
import Caption from '@components/caption';

const RecordDetails = () => {
  return (
    <>
      <li className="usa-process-list__item">
        <h3 className="usa-process-list__heading">
          Select events and documents comprising record
        </h3>
        <DocketEvents isRecordOnAppeal={true} />
      </li>
      <li className="usa-process-list__item">
        <h3 className="usa-process-list__heading">Select panel to hear case</h3>
        <PanelPicker />
      </li>
      <li className="usa-process-list__item">
        <h3 className="usa-process-list__heading">Send case to panel</h3>
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
