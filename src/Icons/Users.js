import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Users = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18.5 15h.5a4 4 0 014 4v2h-3m-5-10a4 4 0 000-8M5 15a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4H9m0-4a4 4 0 10-3.465-2"
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
        d="M15 11a4 4 0 000-8m5.5 18a2.5 2.5 0 002.5-2.5c0-2.327-1.952-3.301-4-3.708M13 7a4 4 0 11-8 0 4 4 0 018 0zM3.5 21h11a2.5 2.5 0 002.5-2.5c0-4.08-6-4-8-4s-8-.08-8 4A2.5 2.5 0 003.5 21z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M9 11a4 4 0 100-8 4 4 0 000 8z" fill={color} />
      <path
        d="M18.5 15h.5a4 4 0 014 4v2h-3m-5-10a4 4 0 000-8M5 15h8a4 4 0 014 4v2H1v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
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
        d="M18.5 15h.5a4 4 0 014 4v2h-3m-5-10a4 4 0 000-8M5 15h8a4 4 0 014 4v2H1v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M15 11a4 4 0 000-8m-2 4a4 4 0 11-8 0 4 4 0 018 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15h.5a4 4 0 014 4v2h-3M5 15h8a4 4 0 014 4v2H1v-2a4 4 0 014-4z"
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

Users.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Users.displayName = 'Users';
export default createIcon(Users);
