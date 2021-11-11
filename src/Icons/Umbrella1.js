import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Umbrella1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 15V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12H12L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C13.0383 4 14.0558 4.20184 15 4.5838"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 3V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M12 12V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18 12C19.1046 12 20.0246 11.0909 19.7513 10.0207C19.3989 8.64068 18.6811 7.36735 17.6568 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87826 4 7.84343 4.84285 6.34314 6.34315C5.31893 7.36735 4.60112 8.64068 4.24869 10.0207C3.97538 11.0909 4.89543 12 6 12L12 12H18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 3V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84286 7.84344 4 9.87827 4 12L12 12H20Z"
        fill={color}
      />
      <path d="M12 12V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12H12L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 3V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 12V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12H12L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 3V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Umbrella1.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Umbrella1.displayName = 'Umbrella1';
export default createIcon(Umbrella1);
