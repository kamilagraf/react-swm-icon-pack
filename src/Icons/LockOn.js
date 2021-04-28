import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const LockOn = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 11H5v10h7M8 11V7c0-1.333.8-4 4-4s4 2.667 4 4v4m-8 0h8m0 0h3v10h-2"
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
        d="M16 10.43c-1.012-.303-2.325-.43-4-.43-1.675 0-2.988.127-4 .43m8 0c2.223.665 3 2.18 3 5.07 0 4.206-1.647 5.5-7 5.5s-7-1.294-7-5.5c0-2.89.777-4.405 3-5.07m8 0V7a4 4 0 00-8 0v3.43"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 11h14v10H5V11z" fill={color} />
      <path d="M8 11V7a4 4 0 118 0v4M5 11h14v10H5V11z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8 11H5v10h14V11h-3m-8 0V7c0-1.333.8-4 4-4s4 2.667 4 4v4m-8 0h8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M8 11V7a4 4 0 118 0v4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

LockOn.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

LockOn.displayName = 'SvgLockOn';
export default createIcon(LockOn);
