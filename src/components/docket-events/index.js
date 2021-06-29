import React from 'react';

const DocketEvents = ({ courtCase, dispatch }) => {
  const { events } = courtCase;
  return (
    <>
      <h4>All events</h4>
      <DocketTable events={events} />
      <AddEventForm dispatch={dispatch} />
    </>
  );
};

const DocketTable = ({ events }) => {
  return (
    <div className="usa-table-container">
      <table className="usa-table">
        <thead>
          <tr>
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
            <DocketEventTableRow event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DocketEventTableRow = ({ event }) => {
  return (
    <tr>
      <td>
        {event.date.month}/{event.date.day}/{event.date.year}
      </td>
      <td>{event.description}</td>
      <td>{event.reference}</td>
    </tr>
  );
};

const AddEventForm = () => {
  return (
    <>
      <h4>New Event</h4>
      <form className="usa-form">
        <label htmlFor="event_type" className="usa-label"></label>
        <select
          name="event_type"
          id="event_type"
          className="usa-select"
        ></select>

        <DocketEventDate />
        <label htmlFor="event_details" className="usa-label">
          Event Details
        </label>
        <textarea
          name="event_details"
          id="event_details"
          className="usa-textarea"
        ></textarea>
        <div className="usa-form-group">
          <label className="usa-label" htmlFor="file-input-single">
            Attach file
          </label>
          <input
            id="file-input-single"
            className="usa-file-input"
            type="file"
            name="file-input-single"
          />
        </div>
      </form>
    </>
  );
};

const DocketEventDate = ({ month, day, year }) => {
  return (
    <div className="usa-memorable-date">
      <div className="usa-form-group usa-form-group--month">
        <label className="usa-label" htmlFor="event_date_1">
          Month
        </label>
        <input
          className="usa-input usa-input--inline"
          id="event_date_1"
          name="event_date_1"
          type="text"
          maxLength="2"
          pattern="[0-9]*"
          inputMode="numeric"
          value={month}
        />
      </div>
      <div className="usa-form-group usa-form-group--day">
        <label className="usa-label" htmlFor="event_date_2">
          Day
        </label>
        <input
          className="usa-input usa-input--inline"
          id="event_date_2"
          name="event_date_2"
          type="text"
          maxLength="2"
          pattern="[0-9]*"
          inputMode="numeric"
          value={day}
        />
      </div>
      <div className="usa-form-group usa-form-group--year">
        <label className="usa-label" htmlFor="event_date_3">
          Year
        </label>
        <input
          className="usa-input usa-input--inline"
          id="event_date_3"
          name="event_date_3"
          type="text"
          minLength="4"
          maxLength="4"
          pattern="[0-9]*"
          inputMode="numeric"
          value={year}
        />
      </div>
    </div>
  );
};

export default DocketEvents;
