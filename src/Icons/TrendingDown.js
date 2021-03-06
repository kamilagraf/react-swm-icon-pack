import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const TrendingDown = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M21 17L13 9L9 13L3 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 17H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 14L21 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M21 17L14.4142 10.4142C13.6332 9.63316 12.3668 9.63317 11.5858 10.4142L10.4142 11.5858C9.63316 12.3668 8.36683 12.3668 7.58579 11.5858L3 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 17H21V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M21 17L13 9L9 13L3 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 17H21V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M21 17L13 9L9 13L3 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 17H21V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />{' '}
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

TrendingDown.propTypes = {
  props: iconType,
};

TrendingDown.displayName = 'TrendingDown';
export default createIcon(TrendingDown);
