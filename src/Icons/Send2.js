import * as React from 'react';
import PropTypes from 'prop-types';

const Send2 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 4l-7 17-3-7M20 4L10 14M20 4l-8.5 3.5M10 14l-7-3 4.25-1.75"
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
        d="M20 4s-4 1-9 3a54.175 54.175 0 00-6.419 3.051c-.691.39-.614 1.363.116 1.676L10 14M20 4s-1 4-3 9a54.175 54.175 0 01-3.051 6.419c-.39.691-1.363.614-1.676-.116L10 14M20 4L10 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 4L3 11l7 3 3 7 7-17z" fill={color} />
      <path d="M20 4L3 11l7 3M20 4l-7 17-3-7M20 4L10 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20 4L3 11l7 3M20 4l-7 17-3-7M20 4L10 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M13 21l7-17-10 10" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4L3 11l7 3 3 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Send2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Send2.displayName = 'SvgSend2';
export default Send2;
