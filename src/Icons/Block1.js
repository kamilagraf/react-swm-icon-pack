import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Block1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20.5 9.03451C19.2743 5.52092 15.9315 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.5337 21 18.5918 18.9634 20.0645 16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M12.0001 12L18.364 18.364" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5.63599 5.63605L10 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5.63605 18.364L18.364 5.63603" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.63605 18.364L18.364 5.63603" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.63605 5.63603L18.364 18.364" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M5.63605 5.63603L18.364 18.364" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5.63605 18.364L18.364 5.63603" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M5.63605 5.63605L18.364 18.364" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5.63605 18.364L18.364 5.63605" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
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

Block1.propTypes = {
  props: iconType,
};

Block1.displayName = 'Block1';
export default createIcon(Block1);
