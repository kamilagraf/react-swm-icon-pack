import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Vertical = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M7 15L12 20L17 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 6.5L7 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L12 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M7 15L12 20L17 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L12 4L7 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M7 15L12 20L17 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L12 4L7 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M7 15L12 20L17 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L12 4L7 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Vertical.propTypes = {
  props: iconType,
};

Vertical.displayName = 'Vertical';
export default createIcon(Vertical);
