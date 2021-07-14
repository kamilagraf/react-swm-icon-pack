import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Quote = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 10.5A3.5 3.5 0 006.5 14l3.5 3.5v-7a3.5 3.5 0 10-7 0zM13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M3 10.5A3.5 3.5 0 006.5 14l3.5 3.5v-7a3.5 3.5 0 10-7 0zM13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z" fill={color} />
      <path
        d="M3 10.5A3.5 3.5 0 006.5 14l3.5 3.5v-7a3.5 3.5 0 10-7 0zM13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M3 10.5A3.5 3.5 0 006.5 14l3.5 3.5v-7a3.5 3.5 0 10-7 0zM13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M13 10.5a3.5 3.5 0 003.5 3.5l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.5A3.5 3.5 0 006.5 14l3.5 3.5v-7a3.5 3.5 0 10-7 0z"
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

Quote.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Quote.displayName = 'Quote';
export default createIcon(Quote);
