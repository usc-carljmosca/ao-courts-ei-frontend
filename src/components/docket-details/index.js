import React from 'react';
import AddParties from '@components/add-parties';
import DocketEvents from '@components/docket-events';
import { Link } from 'gatsby';
import Caption from '@components/caption';

const DocketDetails = () => {
  return (
    <div className="grid-container">
      <Caption />
      <div className="compile-docket">
        <h2>Compile Docket</h2>
        <p>
          Review the parties and docket entries here before finalizing the
          Record on Appeal.
        </p>
      </div>
      <AddParties />
      <DocketEvents />
      <Link to="/record-on-appeal" className="transmit-record usa-button">
        Compile Record on Appeal
      </Link>
    </div>
  );
};

export default DocketDetails;
