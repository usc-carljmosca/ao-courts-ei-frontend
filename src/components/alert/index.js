import React from 'react';

const Alert = ({ type, heading, children }) => {
  return (
    <div className={`usa-alert usa-alert--${type}`}>
      <div className="usa-alert__body">
        <h4 className="usa-alert__heading">{heading}</h4>
        <p className="usa-alert__text">{children}</p>
      </div>
    </div>
  );
};

export default Alert;
