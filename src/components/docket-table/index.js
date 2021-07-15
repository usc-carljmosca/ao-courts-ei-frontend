import React from 'react';
import DocketEventTableRow from '@components/docket-table-event-row';
import { useSelector } from 'react-redux';

const DocketTable = ({ isRecordOnAppeal }) => {
  const { events } = useSelector((state) => state.docket);

  if (typeof events === 'undefined' || events.legnth === 0) return '';

  return (
    <>
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
    </>
  );
};

export default DocketTable;
