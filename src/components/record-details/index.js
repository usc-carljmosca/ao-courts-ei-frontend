import React from 'react';
import DocketEvents from '@components/docket-events';
import { useSelector } from 'react-redux';
import PanelPicker from '@components/panel-picker';

const RecordDetails = () => {
  const { number, caption } = useSelector((state) => state.docket);

  return (
    <>
      <li className="usa-process-list__item">
        <h4 className="usa-process-list__heading">
          Select events and documents comprising record
        </h4>
        <h3>Docket {number}</h3>
        <h2>{caption}</h2>
        <DocketEvents isRecordOnAppeal={true} />
      </li>
      <li className="usa-process-list__item">
        <h4 className="usa-process-list__heading">Select panel to hear case</h4>
        <PanelPicker />
      </li>
      <li className="usa-process-list__item">
        <h4 className="usa-process-list__heading">Send case to panel</h4>
        <button
          className="usa-button usa-button--secondary transmit-record"
          onClick={() => alert('transmitted')}
        >
          Transmit Record
        </button>
      </li>
    </>
  );
};

export default RecordDetails;
