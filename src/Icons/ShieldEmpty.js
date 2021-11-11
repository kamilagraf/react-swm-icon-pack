import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ShieldEmpty = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7L8 5"
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
        d="M4.18803 9.4623C3.96786 7.9633 4.85599 6.572 6.21113 5.89443L10.2111 3.89443C11.3372 3.33137 12.6627 3.33137 13.7888 3.89443L17.7888 5.89443C19.144 6.572 20.0321 7.96329 19.8119 9.4623C19.1654 13.8643 16.8623 18.8285 13.0693 20.5995C12.3925 20.9156 11.6075 20.9156 10.9306 20.5995C7.13769 18.8285 4.83459 13.8643 4.18803 9.4623Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" fill={color} />
      <path
        d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z"
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

ShieldEmpty.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ShieldEmpty.displayName = 'ShieldEmpty';
export default createIcon(ShieldEmpty);
