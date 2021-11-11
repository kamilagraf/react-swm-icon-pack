import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CalendarUser = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 21V20C20 18.8954 19.1046 18 18 18H14C12.8954 18 12 18.8954 12 20V21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M4 11H9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 5H18C19.1046 5 20 5.89543 20 7V9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M6 5C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H9"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 5H12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M16 15C17.1046 15 18 14.1045 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1045 14.8954 15 16 15Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 21H13.25C12.5596 21 12 20.4404 12 19.75C12 17.7096 15 17.75 16 17.75C17 17.75 20 17.7096 20 19.75C20 20.4404 19.4404 21 18.75 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 2.5V6.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 2.5V6.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3.51733 11.5H9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 20.6041C4.64094 19.7517 3.5 17.4094 3.5 12.5C3.5 12.154 3.50567 11.8208 3.51737 11.5C3.72564 5.79277 5.84596 4 12 4C17.3679 4 19.6668 5.36399 20.3048 9.5"
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
        d="M16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 21V20C20 18.8954 19.1046 18 18 18H14C12.8954 18 12 18.8954 12 20V21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M4 11H9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M20 9V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H8"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 21V20C20 18.8954 19.1046 18 18 18H14C12.8954 18 12 18.8954 12 20V21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M4 11H9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M20 9V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H8"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 3V7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

CalendarUser.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarUser.displayName = 'CalendarUser';
export default createIcon(CalendarUser);
