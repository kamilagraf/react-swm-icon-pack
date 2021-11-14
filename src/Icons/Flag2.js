import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Flag2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M4 4V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4H20L15 9L20 14H4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M5 4H18.5858C19.4767 4 19.9229 5.07714 19.2929 5.70711L16.7071 8.29289C16.3166 8.68342 16.3166 9.31658 16.7071 9.70711L19.2929 12.2929C19.9229 12.9229 19.4767 14 18.5858 14H5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 21V4V14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M4 4H20L15 9L20 14H4V4Z" fill={color} />
      <path d="M4 21V14V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4H20L15 9L20 14H4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 21V14V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4H20L15 9L20 14H4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Flag2.propTypes = {
  props: iconType,
};

Flag2.displayName = 'Flag2';
export default createIcon(Flag2);
