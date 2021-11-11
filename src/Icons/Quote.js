import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Quote = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" fill={color} />
      <path
        d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
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
    default:
      return <Outline />;
  }
};

Quote.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Quote.displayName = 'Quote';
export default createIcon(Quote);
