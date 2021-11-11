import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Speaker0 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7L13 3V21L10 18.5"
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
        d="M12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" fill={color} />
      <path
        d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z"
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
        d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z"
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
    default:
      return <Outline />;
  }
};

Speaker0.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Speaker0.displayName = 'Speaker0';
export default createIcon(Speaker0);
