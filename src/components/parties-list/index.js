import React from 'react';

const PartiesList = ({ parties }) => {
  return (
    <ul className="usa-list">
      {parties.map((p) => (
        <Party
          partyName={p.partyName}
          partyDesignation={p.partyDesignation}
          key={p.partyName + p.partyDesignation}
        />
      ))}
    </ul>
  );
};

const Party = ({ partyName, partyDesignation }) => {
  return (
    <li>
      {partyName}, <em>{partyDesignation}</em>
    </li>
  );
};

export default PartiesList;
