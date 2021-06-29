import React from 'react';
import AddParties from '../add-parties';
import DocketEvents from '../docket-events';

const DocketDetails = ({ courtCase, dispatch }) => {
  const { caseNumber, caption } = courtCase;
  return (
    <div className="grid-container">
      <h3>Docket {caseNumber}</h3>
      <h2>{caption}</h2>

      <AddParties courtCase={courtCase} dispatch={dispatch} />
      <DocketEvents courtCase={courtCase} dispatch={dispatch} />
    </div>
  );
};

export default DocketDetails;
