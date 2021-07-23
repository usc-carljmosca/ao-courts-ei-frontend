import React from 'react';
import Icon from '../icon';

const DocketEventTableRow = ({ event, isRecordOnAppeal }) => {
  let cells = [
    <DateCell {...event.date} />,
    <DescriptionCell description={event.description} />,
    <ReferenceCell reference={event.reference} />,
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

const DateCell = ({ month, day, year }) => (
  <td>
    {month}/{day}/{year}
  </td>
);

const DescriptionCell = ({ description }) => <td>{description}</td>;
const ReferenceCell = ({ reference }) => <td>{reference}</td>;

export default DocketEventTableRow;
