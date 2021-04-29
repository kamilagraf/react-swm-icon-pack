import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Sun = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 12h2m14 0h2m-9-9v2m0 14v2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2m-4 7a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M3 12h2m14 0h2m-9-9v2m0 14v2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2m-4 7a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill={color} />
      <path
        d="M3 12h2m14 0h2m-9-9v2m0 14v2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2m-4 7a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M3 12h2m14 0h2m-9-9v2m0 14v2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2m-4 7a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 12h2m14 0h2m-9-9v2m0 14v2M5 5l2 2m10 10l2 2M5 19l2-2M17 7l2-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

Sun.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Sun.displayName = 'SvgSun';
export default createIcon(Sun);
