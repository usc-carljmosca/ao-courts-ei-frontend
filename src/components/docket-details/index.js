import React from 'react';
import AddParties from '../add-parties';
import DocketEvents from '../docket-events';

const DocketDetails = ({ courtCase }) => {
  const { caseNumber, leftParties, rightParties, events } = courtCase;
  return (
    <div className="grid-container">
      <h3>Docket {caseNumber}</h3>
      <h2>
        {leftParties[0]} v. {rightParties[0]}
      </h2>

      <AddParties />
      <DocketEvents events={events} />
    </div>
  );
};

export default DocketDetails;
