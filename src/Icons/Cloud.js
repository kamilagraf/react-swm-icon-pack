import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Cloud = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5C14.7614 5 17 7.23858 17 10V11M7 11V10C7 8.87432 7.37223 7.83569 8 7M17 19C19.2091 19 21 17.2091 21 15C21 13.8053 20.4762 12.7329 19.6458 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );

  switch (set) {
    case 'broken':
      return <Broken />;
    case 'curved':
      return <Curved />;
    case 'duotone':
      return <Duotone />;
    case 'outline':
      return <Outline />;
    default:
      return <Outline />;
  }
};

Cloud.propTypes = {
  props: iconType,
};

Cloud.displayName = 'Cloud';
export default createIcon(Cloud);
