import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Crown1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M16 9l4-4v11H4V5l2 2m2 2l4-4 2 2M4 19h16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M4 19h16M11.293 5.707L8.707 8.293a1 1 0 01-1.414 0L5.707 6.707C5.077 6.077 4 6.523 4 7.414V15a1 1 0 001 1h14a1 1 0 001-1V7.414c0-.89-1.077-1.337-1.707-.707l-1.586 1.586a1 1 0 01-1.414 0l-2.586-2.586a1 1 0 00-1.414 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 16V5l4 4 4-4 4 4 4-4v11H4z" fill={color} />
      <path d="M4 19h16M4 5v11h16V5l-4 4-4-4-4 4-4-4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 19h16M4 5v11h16V5l-4 4-4-4-4 4-4-4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M4 19h16" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16V5l4 4 4-4 4 4 4-4v11H4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Crown1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Crown1.displayName = 'Crown1';
export default createIcon(Crown1);
