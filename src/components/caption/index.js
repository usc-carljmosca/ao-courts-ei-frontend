import React from 'react';
import { useSelector } from 'react-redux';

const Caption = () => {
  const { number, caption } = useSelector((state) => state.docket);

  return (
    <>
      <h1>{caption}</h1>
      <h2>{number}</h2>
    </>
  );
};

export default Caption;
