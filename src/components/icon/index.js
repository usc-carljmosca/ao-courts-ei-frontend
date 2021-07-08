import React from 'react';
import sprite from '@uswds/img/sprite.svg';

const Icon = ({ iconId }) => {
  return (
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
      <use xlinkHref={sprite + '#' + iconId}></use>
    </svg>
  );
};

export default Icon;
