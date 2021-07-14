import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Grid2Horizontal = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M6 3.5H3.5v7h17v-7H10m7 17h3.5v-7h-17v7H13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M3 17.5c0 1.556.5 2.917 1 3.111.5.195 4 .389 8 .389s7.5-.194 8-.389c.5-.194 1-1.555 1-3.111 0-1.556-.5-2.917-1-3.111-.5-.195-4-.389-8-.389s-7.5.194-8 .389c-.5.194-1 1.555-1 3.111zM3 6.5c0 1.556.5 2.917 1 3.111.5.195 4 .389 8 .389s7.5-.194 8-.389c.5-.194 1-1.555 1-3.111 0-1.556-.5-2.917-1-3.111C19.5 3.194 16 3 12 3s-7.5.194-8 .389c-.5.194-1 1.555-1 3.111z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3.5 20.5v-7h17v7h-17z" fill={color} />
      <path d="M3.5 20.5v-7h17v7h-17zM3.5 10.5v-7h17v7h-17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3.5 20.5v-7h17v7h-17zM3.5 10.5v-7h17v7h-17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M20.5 13.5v7h-17v-7h17z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 3.5v7h-17v-7h17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Grid2Horizontal.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Grid2Horizontal.displayName = 'Grid2Horizontal';
export default createIcon(Grid2Horizontal);
