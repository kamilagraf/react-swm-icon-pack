import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Laptop = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5.5H5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1v-9a1 1 0 00-1-1h-3M12 19h8.25a1.25 1.25 0 100-2.5H3.75a1.25 1.25 0 100 2.5H8"
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
        d="M20 16.385c.5-.308 1-2.924 1-5.385 0-2.462-.5-5.077-1-5.385C19.5 5.308 16 5 12 5s-7.5.308-8 .615C3.5 5.923 3 8.538 3 11c0 2.461.5 5.077 1 5.385m-.25.115h16.5a1.25 1.25 0 110 2.5H3.75a1.25 1.25 0 110-2.5z"
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
        d="M5 5.5h14a1 1 0 011 1v9a1 1 0 01-1 1h1.25a1.25 1.25 0 110 2.5H3.75a1.25 1.25 0 110-2.5H5a1 1 0 01-1-1v-9a1 1 0 011-1z"
        fill={color}
      />
      <path
        d="M5 16.5h14a1 1 0 001-1v-9a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1zM3.75 19h16.5a1.25 1.25 0 100-2.5H3.75a1.25 1.25 0 100 2.5z"
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
        d="M5 16.5h14a1 1 0 001-1v-9a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1zM3.75 19h16.5a1.25 1.25 0 100-2.5H3.75a1.25 1.25 0 100 2.5z"
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
        d="M5 16.5h14a1 1 0 001-1v-9a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1zM3.75 19h16.5a1.25 1.25 0 100-2.5H3.75a1.25 1.25 0 100 2.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 16.5H3.75a1.25 1.25 0 100 2.5h16.5a1.25 1.25 0 100-2.5z"
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

Laptop.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Laptop.displayName = 'Laptop';
export default createIcon(Laptop);
