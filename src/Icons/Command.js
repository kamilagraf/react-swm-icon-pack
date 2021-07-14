import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Command = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M9 9h6M9 9v6m0-6H6a3 3 0 113-3m6 3v6m0-6V6a3 3 0 113 3m-3 6v3a3 3 0 103-3h-3zm-6 0H6a3 3 0 103 3v-3zm0 0h3"
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
        d="M9 9h6M9 9v6m0-6V6a3 3 0 10-3 3h3zm6 0v6m0-6h3a3 3 0 10-3-3v3zm0 6H9m6 0v3a3 3 0 103-3h-3zm-6 0H6a3 3 0 103 3v-3z"
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
        d="M3 6a3 3 0 003 3h3V6a3 3 0 00-6 0zM18 3a3 3 0 00-3 3v3h3a3 3 0 100-6zM21 18a3 3 0 00-3-3h-3v3a3 3 0 106 0zM6 21a3 3 0 003-3v-3H6a3 3 0 100 6z"
        fill={color}
        opacity={0.15}
      />
      <path
        d="M9 9h6M9 9v6m0-6V6a3 3 0 10-3 3h3zm6 0v6m0-6h3a3 3 0 10-3-3v3zm0 6H9m6 0v3a3 3 0 103-3h-3zm-6 0H6a3 3 0 103 3v-3z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M9 9h6M9 9v6m0-6V6a3 3 0 10-3 3h3zm6 0v6m0-6h3a3 3 0 10-3-3v3zm0 6H9m6 0v3a3 3 0 103-3h-3zm-6 0H6a3 3 0 103 3v-3z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M9 9h6M9 9V6a3 3 0 10-3 3h3zm6 6H9m6 0v3a3 3 0 103-3h-3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9v6m6-6v6m0-6h3a3 3 0 10-3-3v3zm-6 6H6a3 3 0 103 3v-3z"
        stroke={secondaryColor}
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

Command.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Command.displayName = 'Command';
export default createIcon(Command);
