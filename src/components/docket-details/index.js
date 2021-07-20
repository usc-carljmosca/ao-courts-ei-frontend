import React from 'react';
import AddParties from '@components/add-parties';
import DocketEvents from '@components/docket-events';
import { Link } from 'gatsby';
import Caption from '@components/caption';

const DocketDetails = () => {
  return (
    <div className="grid-container">
      <Caption />
      <AddParties />
      <DocketEvents />
      <Link to="/record-on-appeal" className="transmit-record usa-button">
        Compile Record on Appeal
      </Link>
    </div>
  );
};

export default DocketDetails;
