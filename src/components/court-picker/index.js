import React from 'react';

const CourtPicker = () => {
  const courts = [
    'United States Court of Appeals for the Fourth Circuit',
    'Eastern District of North Carolina',
    'Middle District of North Carolina',
    'Western District of North Carolina',
  ];

  return (
    <div className="usa-form-group">
      <label htmlFor={`select-court`} className="usa-label sr-only">
        Select court to receive appeal
      </label>
      <select className="usa-select" name="select-court">
        <option>-- Select --</option>
        {courts.map((c) => (
          <CourtOption name={c} key={c} />
        ))}
      </select>
    </div>
  );
};

const CourtOption = ({ name }) => {
  return (
    <option
      type="checkbox"
      className="usa-checkbox__input"
      name="select-court"
      id="select-court"
      option={name}
      value={name}
    >
      {name}
    </option>
  );
};

export default CourtPicker;
