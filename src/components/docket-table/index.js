import React from 'react';
import DocketEventTableRow from '@components/docket-table-event-row';
import { useSelector } from 'react-redux';

const DocketTable = ({ isRecordOnAppeal }) => {
  const { events } = useSelector((state) => state.docket);

  let headings = [
    { text: 'Date', sortable: true },
    { text: 'Description', sortable: true },
    { text: 'Reference', sortable: true },
  ];

  const recordHeadings = [
    { text: 'Include in Record' },
    { text: 'Seal document' },
  ];

  headings = isRecordOnAppeal ? [...recordHeadings, ...headings] : headings;

  return (
    <>
      <div className="usa-table-container" id="docket_table">
        <table className="usa-table">
          <thead>
            <tr>
              {headings.map((h) => (
                <th
                  scope="col"
                  role="columnheader"
                  {...(h.sortable ? 'data-sortable' : '')}
                >
                  {h.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <DocketEventTableRow
                event={event}
                key={event.dateFiled}
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
