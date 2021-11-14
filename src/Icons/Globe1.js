import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Globe1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.3345 3 6.93964 4.15875 5.29168 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16 12C16 18 12 21 12 21C12 21 8 18 8 12C8 6 12 3 12 3C12 3 14.2222 4.66667 15.354 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 12H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M21 12H3" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill={color}
      />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M21 12H3" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M21 12H3" stroke={color} strokeWidth={strokeWidth} />
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

Globe1.propTypes = {
  props: iconType,
};

Globe1.displayName = 'Globe1';
export default createIcon(Globe1);
