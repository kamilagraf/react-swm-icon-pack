import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Flag1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M4 21.1111V16.1111" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12V4.125" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111"
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
        d="M4 16C4 16 5 15 8 15C11 15 13 17 16 17C19 17 20 16 20 16V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 4V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M8 15C5 15 4 16 4 16V4C4 4 5 3 8 3C11 3 13 5 16 5C19 5 20 4 20 4V16C20 16 19 17 16 17C13 17 11 15 8 15Z" fill={color} />
      <path d="M4 21.1111V16.1111V4.11111" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 21.1111V16.1111V4.11108" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111"
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

Flag1.propTypes = {
  props: iconType,
};

Flag1.displayName = 'Flag1';
export default createIcon(Flag1);
