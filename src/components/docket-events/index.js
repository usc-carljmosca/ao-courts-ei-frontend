import React from 'react';
import { navigate } from 'gatsby';
import DocketTable from '@components/docket-table';

const DocketEvents = ({ courtCase, dispatch, isRecordOnAppeal }) => {
  return (
    <section>
      <h4 id="all_events">Compile Record on Appeal</h4>
      <p>Select docket entries to include in the Record on Appeal</p>
      <DocketTable
        events={courtCase.events}
        isRecordOnAppeal={isRecordOnAppeal}
      />
      {isRecordOnAppeal ? '' : <AddEventForm dispatch={dispatch} />}
    </section>
  );
};

const AddEventForm = ({ dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const eventType = data.get('event_type');
    const description = data.get('event_details');
    const month = data.get('event_date_1');
    const day = data.get('event_date_2');
    const year = data.get('event_date_3');
    const reference = data.get('file_reference');

    dispatch({
      type: 'ADD_EVENT',
      event: {
        type: eventType,
        description,
        date: { day, month, year },
        reference,
      },
    });

    navigate('#all_events');
  };

  const eventTypes = [
    'Motion Filed',
    'Appearance of Counsel Entered',
    'Notice of Electronic Filing',
    'Notice of Appeal Filed',
    'Hearing Scheduled',
    'Order',
    'Information',
  ];

  return (
    <section>
      <form className="usa-form" onSubmit={handleSubmit}>
        <fieldset className="usa-fieldset">
          <legend className="usa-legend usa-legend--large">New Event</legend>
          <label htmlFor="event_type" className="usa-label">
            Event type
          </label>
          <select name="event_type" id="event_type" className="usa-select">
            <option>- Select an event type-</option>
            {eventTypes.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>

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

          <div className="usa-form-group">
            <label htmlFor="file_reference" className="usa-label">
              Page reference
            </label>
            <input type="text" className="usa-input" name="file_reference" />
          </div>

          <input
            type="submit"
            value="Add Event"
            className="usa-button usa-button--outline"
            name="file_reference"
          />
        </fieldset>
      </form>
    </section>
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
