import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Print = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 15H16V18V21H8V18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 18H20V9H16H8H4V18H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 15C10.2222 15 8.66667 15.1667 8.44444 15.3333C8.22222 15.5 8 16.6667 8 18C8 19.3333 8.22222 20.5 8.44444 20.6667C8.66667 20.8333 10.2222 21 12 21C13.7778 21 15.3333 20.8333 15.5556 20.6667C15.7778 20.5 16 19.3333 16 18C16 16.6667 15.7778 15.5 15.5556 15.3333C15.3333 15.1667 13.7778 15 12 15Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 18C8 18 4.5 17.75 4 17.5C3.5 17.25 3 15.5 3 13.5C3 11.5 3.5 9.75 4 9.5C4.32045 9.33977 5.87316 9.17955 8 9.08514C9.19168 9.03224 10.5636 9 12 9C13.4364 9 14.8083 9.03224 16 9.08514C18.1268 9.17955 19.6796 9.33977 20 9.5C20.5 9.75 21 11.5 21 13.5C21 15.5 20.5 17.25 20 17.5C19.5 17.75 16 18 16 18"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 9.08514V7C8 5.22222 8.22222 3.66667 8.44444 3.44444C8.66667 3.22222 10.2222 3 12 3C13.7778 3 15.3333 3.22222 15.5556 3.44444C15.7778 3.66667 16 5.22222 16 7V9.08514"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M20 9H4V18H8V15H16V18H20V9Z" fill={color} />
      <path d="M16 15H8V18V21H16V18V15Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 18H20V9H16H8H4V18H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V9"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M16 15H8V18V21H16V18V15Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 18H20V9H16H8H4V18H8" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V9"
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

Print.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Print.displayName = 'Print';
export default createIcon(Print);
