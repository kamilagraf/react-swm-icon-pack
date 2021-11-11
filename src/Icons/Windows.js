import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Windows = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 20C3.44772 20 3 19.5523 3 19V10C3 9.44771 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10V19C17 19.5523 16.5523 20 16 20H9"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 12H3" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 3C10.4477 3 10 3.44772 10 4V9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M20 12C20.5523 12 21 11.5523 21 11V4C21 3.44772 20.5523 3 20 3H15"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M21 6H10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M10.0576 6H20.9424" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M10 9V7.5C10 6.97527 10.021 6.46774 10.0576 6C10.1603 4.68497 10.3857 3.68441 10.6111 3.5C10.9167 3.25 13.0556 3 15.5 3C17.9444 3 20.0833 3.25 20.3889 3.5C20.6143 3.68441 20.8397 4.68497 20.9424 6C20.979 6.46774 21 6.97527 21 7.5C21 8.94595 20.8403 10.2612 20.6363 10.9735C20.5306 11.3428 20.1854 11.5206 19.8055 11.5776C18.9164 11.7111 18.1325 11.8864 16.8568 11.9623C16.8583 11.9748 16.8597 11.9874 16.8612 12"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M3.13879 12H15.5H16.8612" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M10 9C6.88889 9 4.16667 9.30556 3.77778 9.61111C3.5321 9.80414 3.28643 10.7288 3.1388 12C3.05274 12.741 3 13.5998 3 14.5C3 16.9444 3.38889 19.0833 3.77778 19.3889C4.16667 19.6944 6.88889 20 10 20C13.1111 20 15.8333 19.6944 16.2222 19.3889C16.6111 19.0833 17 16.9444 17 14.5C17 13.5998 16.9473 12.741 16.8612 12C16.7136 10.7288 16.4679 9.80414 16.2222 9.61111C15.8333 9.30556 13.1111 9 10 9Z"
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
        d="M3 10C3 9.44771 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10V19C17 19.5523 16.5523 20 16 20H4C3.44772 20 3 19.5523 3 19V10Z"
        fill={color}
      />
      <path
        d="M16 9H4C3.44772 9 3 9.44771 3 10V19C3 19.5523 3.44772 20 4 20H16C16.5523 20 17 19.5523 17 19V10C17 9.44772 16.5523 9 16 9Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 12H3" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M10 9V4C10 3.44772 10.4477 3 11 3H20C20.5523 3 21 3.44772 21 4V11C21 11.5523 20.5523 12 20 12H17"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M21 6H10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M16 9H4C3.44772 9 3 9.44771 3 10V19C3 19.5523 3.44772 20 4 20H16C16.5523 20 17 19.5523 17 19V10C17 9.44772 16.5523 9 16 9Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 12H3" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M10 9V4C10 3.44772 10.4477 3 11 3H20C20.5523 3 21 3.44772 21 4V11C21 11.5523 20.5523 12 20 12H17"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M21 6H10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Windows.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Windows.displayName = 'Windows';
export default createIcon(Windows);
