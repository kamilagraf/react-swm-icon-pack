import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Cart2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 11.01V11m8 .01V11m3.82 6.834A2 2 0 0117.826 20H6.174a2 2 0 01-1.993-2.166l.666-8A2 2 0 016.84 8H8V7a4 4 0 018 0v1m0 0h1.16a2 2 0 011.993 1.834l.333 4M16 8h-4"
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
        d="M8 11v.01m8-.01v.01M16 8H8m8 0c3 0 4 3.89 4 5.5 0 6.026-1.603 7-8 7s-8-.974-8-7C4 11.89 5 8 8 8m8 0V7a4 4 0 00-8 0v1"
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
        d="M4.97 9.81A2 2 0 016.961 8h10.077a2 2 0 011.991 1.81l.762 8a2 2 0 01-1.99 2.19H6.198a2 2 0 01-1.99-2.19l.761-8z"
        fill={color}
      />
      <path
        d="M7.827 11.01V11m8 .01V11m-8-3h-1.16a2 2 0 00-1.993 1.834l-.667 8A2 2 0 006 20h11.653a2 2 0 001.993-2.166l-.667-8A2 2 0 0016.986 8h-1.16m-8 0V7a4 4 0 018 0v1m-8 0h8"
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
        d="M8 11.01V11m8 .01V11M8 8H6.84a2 2 0 00-1.993 1.834l-.666 8A2 2 0 006.174 20h11.652a2 2 0 001.994-2.166l-.667-8A2 2 0 0017.16 8H16M8 8V7a4 4 0 018 0v1M8 8h8"
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
        d="M8 8V7a4 4 0 118 0v1m-8 3v.01m8-.01v.01"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.97 9.81A2 2 0 016.961 8h10.077a2 2 0 011.991 1.81l.762 8a2 2 0 01-1.99 2.19H6.198a2 2 0 01-1.99-2.19l.761-8z"
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

Cart2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cart2.displayName = 'SvgCart2';
export default createIcon(Cart2);
