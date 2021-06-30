import React from 'react';
import AddParties from '../add-parties';
import DocketEvents from '../docket-events';
import { Link } from 'gatsby';

const DocketDetails = ({ courtCase, dispatch, isRecordOnAppeal }) => {
  const { caseNumber, caption } = courtCase;

  return (
    <div className="grid-container">
      <h3>Docket {caseNumber}</h3>
      <h2>{caption}</h2>
      {isRecordOnAppeal ? (
        ''
      ) : (
        <AddParties courtCase={courtCase} dispatch={dispatch} />
      )}
      <DocketEvents
        courtCase={courtCase}
        dispatch={dispatch}
        isRecordOnAppeal={isRecordOnAppeal}
      />
      {isRecordOnAppeal ? (
        <button
          class="usa-button usa-button--secondary transmit-record"
          onClick={() => alert('transmitted')}
        >
          Transmit Record
        </button>
      ) : (
        <Link to="/record-on-appeal" className="transmit-record usa-button">
          Compile Record on Appeal
        </Link>
      )}
    </div>
  );
};

export default DocketDetails;
