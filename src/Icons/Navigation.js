import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Navigation = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 17L19 20L12 3L5 20L8.5 18.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 17.6965L17.6299 19.9233C18.4048 20.2298 19.1851 19.5715 18.9609 18.7765C18.5185 17.208 17.7304 14.752 16.4587 11.8179C14.2294 6.67411 12 3 12 3C12 3 9.77063 6.67411 7.54127 11.8179C6.26957 14.752 5.48148 17.208 5.03907 18.7765C4.81486 19.5715 5.59521 20.2298 6.37009 19.9233L12 17.6965Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M12 3L19 20L12 17L5 20L12 3Z" fill={color} />
      <path d="M19 20L12 3L5 20L12 17L19 20Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M19 20L12 3L5 20L12 17L19 20Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Navigation.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Navigation.displayName = 'Navigation';
export default createIcon(Navigation);
