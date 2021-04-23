import * as React from 'react';
import PropTypes from 'prop-types';

const LockOff = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 11H5v10h8M8 11V7c0-1.333.8-4 4-4 1.91 0 2.965.95 3.505 2M8 11h11v10h-2"
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
        d="M16 7a4 4 0 00-8 0v3.43m0 0c-2.223.665-3 2.18-3 5.07 0 4.206 1.647 5.5 7 5.5s7-1.294 7-5.5c0-2.89-.777-4.405-3-5.07-1.012-.303-2.325-.43-4-.43-1.675 0-2.988.127-4 .43z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M16 7a4 4 0 00-8 0v4m-3 0h14v10H5V11z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path opacity={0.15} d="M5 11h14v10H5V11z" fill={color} />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8 11H5v10h14V11H8zm0 0V7c0-1.333.8-4 4-4 1.91 0 2.965.95 3.505 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M16 7a4 4 0 00-8 0v4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11h14v10H5V11z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

LockOff.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

LockOff.displayName = 'SvgLockOff';
export default LockOff;
