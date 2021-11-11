import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const UsersMore = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14H10C7.79086 14 6 15.7909 6 18V19H18V18C18 15.7909 16.2091 14 14 14Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
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
        d="M19 14C21.2091 14 23 16 23 17.5C23 18.3284 22.3284 19 21.5 19H21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 19H16.5C17.3284 19 18 18.3284 18 17.5C18 15 15 14 12 14C9 14 6 15 6 17.5C6 18.3284 6.67157 19 7.5 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14C2.79086 14 1 16 1 17.5C1 18.3284 1.67157 19 2.5 19H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11C5.34315 11 4 9.65685 4 8C4 6.34315 5.34315 5 7 5"
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
        opacity="0.15"
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
        fill={color}
      />
      <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14H10C7.79086 14 6 15.7909 6 18V19H18V18C18 15.7909 16.2091 14 14 14Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3 19H1V18C1 16.1362 2.27477 14.57 4 14.126" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 10.8293C4.83481 10.4175 4 9.30623 4 8.00001C4 6.69379 4.83481 5.58255 6 5.17072"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19H23V18C23 16.1362 21.7252 14.57 20 14.126"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.17072C19.1652 5.58255 20 6.69379 20 8.00001C20 9.30623 19.1652 10.4175 18 10.8293"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14H10C7.79086 14 6 15.7909 6 18V19H18V18C18 15.7909 16.2091 14 14 14Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
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

UsersMore.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

UsersMore.displayName = 'UsersMore';
export default createIcon(UsersMore);
