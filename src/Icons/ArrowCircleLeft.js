import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ArrowCircleLeft = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 12H7l4 4m0-8l-2 2m11.064 6A9 9 0 1017 19.485"
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
        d="M7 12h10M7 12l4-4m-4 4l4 4m1-13a9 9 0 110 18 9 9 0 010-18z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
      <path
        d="M7 12h10M7 12l4-4m-4 4l4 4m1-13a9 9 0 110 18 9 9 0 010-18z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M7 12h10M7 12l4-4m-4 4l4 4m1-13a9 9 0 110 18 9 9 0 010-18z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M7 12h10M7 12l4-4m-4 4l4 4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ArrowCircleLeft.displayName = 'SvgArrowCircleLeft';
export default createIcon(ArrowCircleLeft);
