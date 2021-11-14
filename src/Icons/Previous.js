import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Previous = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M5 18L5 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 18V6L9 12L15.6667 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M5 18C5 18 4.5 16 4.5 12C4.5 8 5 6 5 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 18C19 18 19.5 16 19.5 12C19.5 8 19 6 19 6C19 6 17 6.5 13.5 8.5C10 10.5 9 12 9 12C9 12 10 13.5 13.5 15.5C17 17.5 19 18 19 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M19 18L19 6L9 12L19 18Z" fill={color} />
      <path d="M19 6L19 18L9 12L19 6Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M5 18L5 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M19 6L19 18L9 12L19 6Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M5 18L5 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Previous.propTypes = {
  props: iconType,
};

Previous.displayName = 'Previous';
export default createIcon(Previous);
