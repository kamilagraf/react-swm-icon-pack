import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ChevronCircleDown = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M7 10l3 3m2 2l5-5m0-5.484A9 9 0 1020.064 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 10l5 5 5-5" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path fill={color} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".15" />
      <path stroke={color} strokeWidth={strokeWidth} d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 10l5 5 5-5" />
    </g>
  );
  const Outline = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M7 10l5 5 5-5" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M7 10l5 5 5-5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

ChevronCircleDown.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChevronCircleDown.displayName = 'ChevronCircleDown';
export default createIcon(ChevronCircleDown);
