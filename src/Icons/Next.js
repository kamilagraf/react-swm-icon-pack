import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Next = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M19 6V18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18V6L15 12L8.33333 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />{' '}
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M19 6C19 6 19.5 8 19.5 12C19.5 16 19 18 19 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5 6C5 6 4.5 8 4.5 12C4.5 16 5 18 5 18C5 18 7 17.5 10.5 15.5C14 13.5 15 12 15 12C15 12 14 10.5 10.5 8.5C7 6.5 5 6 5 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 6V18L15 12L5 6Z" fill={color} />
      <path d="M5 18L5 6L15 12L5 18Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M19 6V18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M5 18L5 6L15 12L5 18Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M19 6V18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Next.propTypes = {
  props: iconType,
};

Next.displayName = 'Next';
export default createIcon(Next);
