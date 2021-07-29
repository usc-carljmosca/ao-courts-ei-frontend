import { Link } from 'gatsby';
import React from 'react';

const CreateCaseBanner = () => {
  return (
    <div className="create-case-banner">
      <div className="grid-container">
        Would you like to begin compiling the record from this docket or create
        a new record from scratch
        <ul className="usa-button-group">
          <li className="usa-button-group__item">
            <Link
              to="/docket-entry"
              state={{ fromBanner: true }}
              className="usa-button"
            >
              Compile record from existing docket
            </Link>
          </li>
          <li className="usa-button-group__item">
            <Link
              to="/docket-entry"
              state={{ fromBanner: true, deleteEvents: true }}
              className="usa-button usa-button--outline"
            >
              Create docket from scratch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateCaseBanner;
