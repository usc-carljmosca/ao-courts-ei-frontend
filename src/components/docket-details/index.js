import React from 'react';
import AddParties from '@components/add-parties';
import DocketEvents from '@components/docket-events';
import { Link } from 'gatsby';
import { useSelector } from 'react-redux';

const DocketDetails = ({ isRecordOnAppeal }) => {
  const { number, caption } = useSelector((state) => state.docket);

  return (
    <div className="grid-container">
      <h3>Docket {number}</h3>
      <h2>{caption}</h2>
      <AddParties />
      <DocketEvents />
      <Link to="/record-on-appeal" className="transmit-record usa-button">
        Compile Record on Appeal
      </Link>
    </div>
  );
};

export default DocketDetails;
