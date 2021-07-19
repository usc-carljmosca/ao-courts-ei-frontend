import React from 'react';

const PanelPicker = () => {
  const judges = [
    'Chief Judge Roger L. Gregory',
    'Judge J. Harvie Wilkinson III',
    'Judge Paul V. Niemeyer',
    'Judge Diana Gribbon Motz',
    'Judge Robert B. King',
    'Judge G. Steven Agee',
    'Judge Barbara Milano Keenan',
    'Judge James A. Wynn, Jr.',
    'Judge Albert Diaz',
    'Judge Stephanie D. Thacker',
    'Judge Pamela A. Harris',
    'Judge Julius N. Richardson',
    'Judge A. Marvin Quattlebaum, Jr.',
    'Judge Allison Jones Rushing',
    'Senior Judge William B. Traxler, Jr.',
    'Senior Judge Dennis W. Shedd',
  ];

  return (
    <div className="usa-form-group">
      {judges.map((j) => (
        <JudgeCheckbox name={j} key={j} />
      ))}
    </div>
  );
};

const JudgeCheckbox = ({ name }) => {
  const normalizedName = name
    .toLocaleLowerCase()
    .replace(/ /g, '-')
    .replace(/[,\.]/g, '');

  return (
    <div className="usa-checkbox">
      <input
        type="checkbox"
        className="usa-checkbox__input"
        name="select-panel"
        id={`select-panel-${normalizedName}`}
        value={normalizedName}
      />
      <label
        htmlFor={`select-panel-${normalizedName}`}
        className="usa-checkbox__label"
      >
        {name}
      </label>
    </div>
  );
};

export default PanelPicker;
