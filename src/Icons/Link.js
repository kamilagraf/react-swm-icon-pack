import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Link = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8L15 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 12H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8H7C6.27143 8 5.58835 8.19479 5 8.53513" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12C3 14.2091 4.79086 16 7 16H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M8 12H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8L15 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
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
        d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8L15 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 12H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
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
        d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8L15 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 12H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
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

Link.propTypes = {
  props: iconType,
};

Link.displayName = 'Link';
export default createIcon(Link);
