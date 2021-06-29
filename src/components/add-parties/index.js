import React from 'react';
import sprite from '../../../node_modules/uswds/dist/img/sprite.svg';

const AddParties = ({ courtCase, dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const partyName = data.get('party');
    const partyDesignation = data.get('party-designation');
    dispatch({ type: 'ADD_PARTY', party: { partyName, partyDesignation } });
  };

  return (
    <>
      <h4>Parties</h4>
      <PartiesList parties={courtCase.parties} />

      <h4>Add Party</h4>
      <form className="usa-form-group" onSubmit={handleSubmit}>
        <AddPartiesFields />
        <input type="submit" className="usa-button" value="Add Party" />
      </form>
    </>
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
    <div className="usa-form-group party-inputs">
      <label htmlFor="party" className="usa-label">
        Party Name
      </label>
      <input type="text" className="usa-input" id="party" name="party" />

      <label htmlFor="party-designation" className="usa-label">
        Designation
      </label>
      <select
        className="usa-select"
        id="party-designation"
        name="party-designation"
      >
        {partyTypes.map((type) => (
          <option value={type.toLocaleLowerCase()} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

const PartiesList = ({ parties }) => {
  return (
    <ul className="usa-list">
      {parties.map((p) => (
        <Party
          partyName={p.partyName}
          partyDesignation={p.partyDesignation}
          key={p.partyName + p.partyDesignation}
        />
      ))}
    </ul>
  );
};

const Party = ({ partyName, partyDesignation }) => {
  return (
    <li>
      {partyName}, <em>{partyDesignation}</em>
    </li>
  );
};

export default AddParties;
