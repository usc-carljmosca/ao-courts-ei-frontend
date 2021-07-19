import React from 'react';
import DocketEventTableRow from '@components/docket-table-event-row';

const RecordTable = ({ events, isRecordOnAppeal }) => {
  return (
    <>
      <div className="usa-table-container" id="docket_table">
        <table className="usa-table">
          <thead>
            <tr>
              <th scope="col" role="columnheader">
                Include in Record on Appeal
              </th>
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

export default RecordTable;
