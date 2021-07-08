import React from 'react';
import Icon from '../icon';

const DocketTable = ({ events, isRecordOnAppeal }) => {
  return (
    <div className="usa-table-container" id="docket_table">
      <table className="usa-table">
        <thead>
          <tr>
            {isRecordOnAppeal ? <th>Include in Record on Appeal</th> : ''}
            <th data-sortable scope="col" role="columnheader">
              Date
            </th>
            <th data-sortable scope="col" role="columnheader">
              Description
            </th>
            <th data-sortable scope="col" role="columnheader">
              Reference
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <DocketEventTableRow
              event={event}
              key={event.date.month + event.date.day + event.date.year}
              isRecordOnAppeal={isRecordOnAppeal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DocketEventTableRow = ({ event, isRecordOnAppeal, isSealed }) => {
  return (
    <tr>
      {isRecordOnAppeal ? (
        <td>
          <input type="checkbox" className="usa-checkbox" />
          <button className="usa-button usa-button--unstyled seal-case">
            <Icon iconId="lock" />
          </button>
        </td>
      ) : (
        ''
      )}
      <td>
        {event.date.month}/{event.date.day}/{event.date.year}
      </td>
      <td>{event.description}</td>
      <td>{event.reference}</td>
    </tr>
  );
};

export default DocketTable;
