import React from 'react';
import AddParties from '../add-parties';

const DocketDetails = ({ courtCase }) => {
  const { caseNumber, leftParties, rightParties } = courtCase;
  return(
    <div className="grid-container">
      <h3>Docket {caseNumber}</h3>
      <h2>{leftParties[0]} v. {rightParties[0]}</h2>

      <AddParties />
    </div>
  );
}

export default DocketDetails;
