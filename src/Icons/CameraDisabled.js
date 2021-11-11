import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CameraDisabled = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 9C21 7.89543 20.1046 7 19 7H16.5C15.9477 7 15.5 6.55228 15.5 6C15.5 5.44772 15.0523 5 14.5 5H10M21 16V13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 9V17C3 18.1046 3.89543 19 5 19M14 19H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M15 18.9372C14.0645 18.9771 13.0495 19 12 19C8 19 4.5 18.6667 4 18.3333C3.5 18 3 15.6667 3 13C3 10.7849 3.34499 8.79986 3.7484 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 16C10.3431 16 9 14.6569 9 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10 5.16181C10.4888 5.06081 11.1374 5 12 5C17 5 14.8083 7.04298 16 7.11352C18.1268 7.2394 19.6796 7.45303 20 7.66667C20.5 8 21 10.3333 21 13C21 14.0946 20.9158 15.133 20.7819 16"
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
        d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 9V17C3 18.1046 3.89543 19 5 19H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 9V17C3 18.1046 3.89543 19 5 19H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

CameraDisabled.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CameraDisabled.displayName = 'CameraDisabled';
export default createIcon(CameraDisabled);
