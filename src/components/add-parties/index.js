import React, { useState } from 'react';
import sprite from '../../../node_modules/uswds/dist/img/sprite.svg';

const AddParties = () => {
  const [partiesFields, setPartiesFields] = useState([<AddPartiesFields />]);

  const handleAddParty = () => {
    setPartiesFields([...partiesFields, <AddPartiesFields />]);
  };

  return (
    <div className="usa-form-group" id="addPartyForm">
      {partiesFields.map((f) => f)}
      <button onClick={handleAddParty}>Add Party</button>
    </div>
  );
};

const AddPartiesFields = () => {
  const partyTypes = [
    'Plaintiff',
    'Government',
    'Defendant',
    'Appellant',
    'Appellee',
    'Petitioner',
    'Respondent',
  ];

  return (
    <>
      <label htmlFor="party-1" className="usa-label">
        Party Name
      </label>
      <input type="text" class="usa-input" id="party-1" />

      <label htmlFor="party-1" className="usa-label">
        Designation
      </label>
      <select class="usa-select" id="party-1-designation">
        {partyTypes.map((type) => (
          <option value={type.toLocaleLowerCase()}>{type}</option>
        ))}
      </select>
    </>
  );
};

export default AddParties;
