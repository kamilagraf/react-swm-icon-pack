import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const ChevronRightCircle = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M10 17l5-5m-5-5l3 3m-3 10.777A9 9 0 105.292 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 17l5-5-5-5" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path fill={color} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".15" />
      <path stroke={color} strokeWidth={strokeWidth} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 17l5-5-5-5" />
    </g>
  );
  const Outline = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 17l5-5-5-5" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M10 17l5-5-5-5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ChevronRightCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChevronRightCircle.displayName = 'SvgChevronRightCircle';
export default createIcon(ChevronRightCircle);
