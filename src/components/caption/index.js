import React from 'react';
import { useSelector } from 'react-redux';

const Caption = () => {
  const { number, caption } = useSelector((state) => state.docket);

  return (
    <div className="caption">
      <h1>{caption}</h1>
      <div classNamk="docket-number">
        {number || '21-12345' /* API doesn't currently have a docket number */}
      </div>
    </div>
  );
};

export default Caption;
