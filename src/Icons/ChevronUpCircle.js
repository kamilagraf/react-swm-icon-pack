import * as React from 'react';
import PropTypes from 'prop-types';

const ChevronUpCircle = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path d="M17 14l-5-5m-5 5l3-3m0-7.777a9 9 0 11-4 2.069" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth={strokeWidth} d="M17 14l-5-5-5 5" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path fill={color} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".15" />
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth={strokeWidth} d="M17 14l-5-5-5 5" />
    </g>
  );
  const Outline = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth={strokeWidth} d="M17 14l-5-5-5 5" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M17 14l-5-5-5 5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ChevronUpCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChevronUpCircle.displayName = 'SvgChevronUpCircle';
export default ChevronUpCircle;
