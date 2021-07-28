import React from 'react';
import Icon from '../icon';

const DocketEventTableRow = ({ event, isRecordOnAppeal }) => {
  console.log(event);
  let cells = [
    <DateCell dateFiled={event.dateFiled} />,
    <DescriptionCell text={event.text} />,
    <ReferenceCell />,
  ];

  const recordControlCells = [<IncludeEventCell />, <SealEventCell />];

  cells = isRecordOnAppeal ? [...recordControlCells, ...cells] : cells;

  return <tr>{cells}</tr>;
};

const IncludeEventCell = () => (
  <td>
    <input type="checkbox" className="usa-checkbox" />
  </td>
);

const SealEventCell = () => (
  <td>
    <button className="usa-button usa-button--unstyled seal-case">
      <Icon iconId="lock" />
    </button>
  </td>
);

const DateCell = ({ dateFiled }) => <td>{dateFiled}</td>;

const DescriptionCell = ({ text }) => <td>{text}</td>;
const ReferenceCell = ({ reference }) => {
  reference = reference || Math.floor(Math.random() * 200);
  return (
    <td>
      <a href="#">p. {reference}</a>
    </td>
  );
};

export default DocketEventTableRow;
