import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const CheckSmall = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M17 9L12 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 16L7 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M17 9L9.99998 16L6.99994 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M17.0001 9L10 16L7 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M17 9L9.99998 16L6.99994 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

CheckSmall.propTypes = {
  props: iconType,
};

CheckSmall.displayName = 'CheckSmall';
export default createIcon(CheckSmall);
