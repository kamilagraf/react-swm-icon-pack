import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Wallet = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H7"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9V15M16 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H11"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 6C8 6 4.5 6.33333 4 6.66667C3.63118 6.91254 3.26237 8.24663 3.09422 10C3.03442 10.6237 3 11.3004 3 12C3 14.6667 3.5 17 4 17.3333C4.5 17.6667 8 18 12 18C16 18 19.5 17.6667 20 17.3333C20.2948 17.1368 20.5895 16.2452 20.7819 15C20.9158 14.133 21 13.0946 21 12C21 11.3004 20.9656 10.6237 20.9058 10C20.872 9.64796 20.8302 9.31282 20.7819 9C20.5895 7.75478 20.2948 6.86318 20 6.66667C19.5 6.33333 16 6 12 6Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.7819 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H20.7819"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V15H14C12.3431 15 11 13.6569 11 12C11 10.3431 12.3431 9 14 9H21V8C21 6.89543 20.1046 6 19 6Z"
        fill={color}
      />
      <path
        d="M21 9V15M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M21 9V15M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Wallet.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Wallet.displayName = 'Wallet';
export default createIcon(Wallet);
