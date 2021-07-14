import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Basketball = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 12a9 9 0 11-18 0m18 0a9 9 0 00-9-9m9 9h-9m-9 0a9 9 0 019-9m-9 9h6.5M12 3v15m7.233-11.324a6.001 6.001 0 00.004 10.65M4.767 6.676a6 6 0 01-.004 10.65"
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9a9 9 0 019-9m7.233 3.676a6.001 6.001 0 00.004 10.65M4.767 6.676a6 6 0 01-.004 10.65"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity={0.15}
        d="M19.25 6.666A6 6 0 0016 12a6 6 0 003.25 5.334A8.987 8.987 0 0112 21a8.987 8.987 0 01-7.25-3.666A6 6 0 008 12a6 6 0 00-3.25-5.334A8.987 8.987 0 0112 3a8.987 8.987 0 017.25 3.666z"
        fill={color}
      />
      <path
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9a9 9 0 019-9m7.233 3.676a6.001 6.001 0 00.004 10.65M4.767 6.676a6 6 0 01-.004 10.65"
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9a9 9 0 019-9m7.233 3.676a6.001 6.001 0 00.004 10.65M4.767 6.676a6 6 0 01-.004 10.65"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M21 12H3m9 9V3" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19.233 6.676a6.001 6.001 0 00.004 10.65M4.767 6.676a6 6 0 01-.004 10.65M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

Basketball.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Basketball.displayName = 'Basketball';
export default createIcon(Basketball);
