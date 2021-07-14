import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Camera = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M9 13a3 3 0 103-3m-7 9a2 2 0 01-2-2V9a2 2 0 012-2h2.5a1 1 0 001-1 1 1 0 011-1h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2m0 4v4a2 2 0 01-2 2H9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M12 16a3 3 0 100-6 3 3 0 000 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 13c0-2.667-.5-5-1-5.333-.32-.214-1.873-.428-4-.553C14.808 7.043 17 5 12 5S9.192 7.043 8 7.114c-2.127.125-3.68.339-4 .553C3.5 8 3 10.333 3 13c0 2.667.5 5 1 5.333.5.334 4 .667 8 .667s7.5-.333 8-.667c.5-.333 1-2.666 1-5.333z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-2.5a1 1 0 01-1-1 1 1 0 00-1-1h-5a1 1 0 00-1 1 1 1 0 01-1 1H5zm10 6a3 3 0 11-6 0 3 3 0 016 0z"
        fill={color}
      />
      <path
        d="M3 9a2 2 0 012-2h2.5a1 1 0 001-1 1 1 0 011-1h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M3 9a2 2 0 012-2h2.5a1 1 0 001-1 1 1 0 011-1h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 16a3 3 0 100-6 3 3 0 000 6z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 9a2 2 0 012-2h2.5a1 1 0 001-1 1 1 0 011-1h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
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

Camera.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Camera.displayName = 'Camera';
export default createIcon(Camera);
