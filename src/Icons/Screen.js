import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Screen = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M16 20H12H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 20V16" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44771 4 6V15C4 15.5523 4.44772 16 5 16H12H19C19.5523 16 20 15.5523 20 15V10"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M16 20.5H12H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 16.5V20.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 3.5C8 3.5 4.5 3.83333 4 4.16667C3.5 4.5 3 7.33333 3 10C3 12.6667 3.5 15.5 4 15.8333C4.5 16.1667 8 16.5 12 16.5C16 16.5 19.5 16.1667 20 15.8333C20.5 15.5 21 12.6667 21 10C21 7.33333 20.5 4.5 20 4.16667C19.5 3.83333 16 3.5 12 3.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M4 6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V6Z"
        fill={color}
      />
      <path d="M16 20H12H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 20V16" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M19 5H5C4.44772 5 4 5.44771 4 6V15C4 15.5523 4.44772 16 5 16H12H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M16 20H12H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 20V16" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M19 5H5C4.44772 5 4 5.44771 4 6V15C4 15.5523 4.44772 16 5 16H12H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
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

Screen.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Screen.displayName = 'Screen';
export default createIcon(Screen);
