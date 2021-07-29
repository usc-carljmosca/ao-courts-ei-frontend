import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { partyAdded } from '@store/docket/docket.slice';
import PartiesList from '@components/parties-list';

const AddParties = () => {
  const dispatch = useDispatch();
  const { parties } = useSelector((state) => state.docket);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const partyName = data.get('party');
    const partyDesignation = data.get('party-designation');
    console.log(partyName);
    dispatch(partyAdded({ party: { partyName, partyDesignation } }));
  };

  return (
    <section className="add-parties">
      <h3>Parties</h3>

      {parties && parties.length > 0 && <PartiesList parties={parties} />}

      <form onSubmit={handleSubmit}>
        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Add Parties</legend>
          <AddPartiesFields />
          <div className="usa-form-group">
            <input type="submit" className="usa-button" value="Add Party" />
          </div>
        </fieldset>
      </form>
    </section>
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
        <option>- Select a designation for the party -</option>
        {partyTypes.map((type) => (
          <option value={type.toLocaleLowerCase()} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddParties;
