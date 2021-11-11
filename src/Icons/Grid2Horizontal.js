import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Grid2Horizontal = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 20.5L20.5 20.5L20.5 13.5L3.5 13.5L3.5 20.5L12 20.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 3.5L3.5 3.5L3.5 10.5L20.5 10.5L20.5 3.5L11 3.5"
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
        d="M3 6.5C3 8.05556 3.5 9.41667 4 9.61111C4.5 9.80556 8 10 12 10C16 10 19.5 9.80555 20 9.61111C20.5 9.41667 21 8.05555 21 6.5C21 4.94444 20.5 3.58333 20 3.38889C19.5 3.19444 16 3 12 3C8 3 4.5 3.19444 4 3.38889C3.5 3.58333 3 4.94444 3 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17.5C3 19.0556 3.5 20.4167 4 20.6111C4.5 20.8056 8 21 12 21C16 21 19.5 20.8056 20 20.6111C20.5 20.4167 21 19.0556 21 17.5C21 15.9444 20.5 14.5833 20 14.3889C19.5 14.1944 16 14 12 14C8 14 4.5 14.1944 4 14.3889C3.5 14.5833 3 15.9444 3 17.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M3.5 20.5L3.5 13.5L20.5 13.5V20.5H3.5Z" fill={color} />
      <path
        d="M3.5 20.5L3.5 13.5L20.5 13.5L20.5 20.5L3.5 20.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5L3.5 3.5L20.5 3.5L20.5 10.5L3.5 10.5Z"
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
        d="M3.5 20.5L3.5 13.5L20.5 13.5L20.5 20.5L3.5 20.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5L3.5 3.5L20.5 3.5L20.5 10.5L3.5 10.5Z"
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

Grid2Horizontal.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Grid2Horizontal.displayName = 'Grid2Horizontal';
export default createIcon(Grid2Horizontal);
