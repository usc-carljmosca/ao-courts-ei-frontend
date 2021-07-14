import React from 'react';
import Icon from '../icon';

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

export default DocketEventTableRow;
