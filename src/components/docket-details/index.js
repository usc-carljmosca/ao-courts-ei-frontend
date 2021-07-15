import React from 'react';
import AddParties from '@components/add-parties';
import DocketEvents from '@components/docket-events';
import { Link } from 'gatsby';
import { useSelector } from 'react-redux';

const DocketDetails = ({ isRecordOnAppeal }) => {
  const { number, caption } = useSelector((state) => state.docket);

  return (
    <div className="grid-container">
      <h3>Docket {number}</h3>
      <h2>{caption}</h2>
      {isRecordOnAppeal ? '' : <AddParties />}
      <DocketEvents isRecordOnAppeal={isRecordOnAppeal} />
      {isRecordOnAppeal ? (
        <>
          <RecordDestination />
          <button
            className="usa-button usa-button--secondary transmit-record"
            onClick={() => alert('transmitted')}
          >
            Transmit Record
          </button>
        </>
      ) : (
        <Link to="/record-on-appeal" className="transmit-record usa-button">
          Compile Record on Appeal
        </Link>
      )}
    </div>
  );
};

const RecordDestination = () => {
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
      <h3>Select Panel to receive record</h3>
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

export default DocketDetails;
