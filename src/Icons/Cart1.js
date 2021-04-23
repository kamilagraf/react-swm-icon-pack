import * as React from 'react';
import PropTypes from 'prop-types';

const Cart1 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17.826 20a2 2 0 001.994-2.166l-.667-8A2 2 0 0017.16 8H16m0 0V7a4 4 0 10-8 0v1m8 0v3m0-3h-4M8 8v3m0-3H6.84a2 2 0 00-1.993 1.834l-.666 8A2 2 0 006.174 20H13"
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
        d="M8 11V7a4 4 0 018 0v4m0-3H8c-3 0-4 3.89-4 5.5 0 6.026 1.603 7 8 7s8-.974 8-7c0-1.61-1-5.5-4-5.5z"
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
        d="M4.97 9.81A2 2 0 016.963 8h10.077a2 2 0 011.99 1.81l.763 8A2 2 0 0117.8 20H6.2a2 2 0 01-1.991-2.19l.762-8z"
        fill={color}
      />
      <path
        d="M7.827 11V7a4 4 0 018 0v4M6 20h11.653a2 2 0 001.993-2.166l-.667-8A2 2 0 0016.986 8H6.666a2 2 0 00-1.992 1.834l-.667 8A2 2 0 006 20z"
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
        d="M8 11V7a4 4 0 018 0v4m-9.826 9h11.652a2 2 0 001.994-2.166l-.667-8A2 2 0 0017.16 8H6.84a2 2 0 00-1.993 1.834l-.666 8A2 2 0 006.174 20z"
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
        d="M4.97 9.81A2 2 0 016.961 8h10.077a2 2 0 011.991 1.81l.762 8a2 2 0 01-1.99 2.19H6.198a2 2 0 01-1.99-2.19l.761-8z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 11V7a4 4 0 118 0v4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Cart1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cart1.displayName = 'SvgCart1';
export default Cart1;
