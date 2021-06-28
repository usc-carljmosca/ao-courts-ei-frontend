import React from 'react';

const DocketEvents = ({ events }) => {
  return (
    <>
      <h4>All events</h4>
      <DocketTable events={events} />
      <AddEventForm />
    </>
  );
};

const DocketTable = ({ events }) => {
  return (
    <div className="usa-table-container">
      <table class="usa-table">
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
      <td>{event.date}</td>
      <td>{event.description}</td>
      <td>{event.reference}</td>
    </tr>
  );
};

const AddEventForm = () => {
  return (
    <>
      <h4>New Event</h4>
      <form class="usa-form">
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
        <div class="usa-form-group">
          <label class="usa-label" for="file-input-single">
            Attach file
          </label>
          <input
            id="file-input-single"
            class="usa-file-input"
            type="file"
            name="file-input-single"
          />
        </div>
      </form>
    </>
  );
};

const DocketEventDate = () => {
  return (
    <div class="usa-memorable-date">
      <div class="usa-form-group usa-form-group--month">
        <label class="usa-label" for="event_date_1">
          Month
        </label>
        <input
          class="usa-input usa-input--inline"
          id="event_date_1"
          name="event_date_1"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
        />
      </div>
      <div class="usa-form-group usa-form-group--day">
        <label class="usa-label" for="event_date_2">
          Day
        </label>
        <input
          class="usa-input usa-input--inline"
          id="event_date_2"
          name="event_date_2"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
        />
      </div>
      <div class="usa-form-group usa-form-group--year">
        <label class="usa-label" for="event_date_3">
          Year
        </label>
        <input
          class="usa-input usa-input--inline"
          id="event_date_3"
          name="event_date_3"
          type="text"
          minlength="4"
          maxlength="4"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
        />
      </div>
    </div>
  );
};

export default DocketEvents;
