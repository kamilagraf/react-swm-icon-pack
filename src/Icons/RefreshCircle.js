import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const RefreshCircle = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7.83331 13.6C8.258 14.4031 8.97942 15.0676 9.88885 15.4934C10.7983 15.9191 11.8465 16.083 12.8755 15.9604C13.9045 15.8378 14.8586 15.4353 15.594 14.8136L17 13.7451"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 16V13.6H14.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.1667 10.4C15.742 9.59687 15.0206 8.93238 14.1111 8.50664C13.2017 8.08091 12.1535 7.91699 11.1245 8.03959C10.0955 8.16219 9.1414 8.56467 8.40599 9.18637L7 10.2549"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7 8V10.4H9.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M7.83334 13.6C8.25804 14.4031 8.97945 15.0676 9.88888 15.4934C10.7983 15.9191 11.8465 16.083 12.8755 15.9604C13.9045 15.8378 14.8586 15.4353 15.594 14.8136L17 13.7451"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 16V13.6H14.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.1667 10.4C15.742 9.59687 15.0206 8.93238 14.1111 8.50664C13.2017 8.08091 12.1535 7.91699 11.1245 8.03959C10.0955 8.16219 9.1414 8.56467 8.40599 9.18637L7 10.2549"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7 8V10.4H9.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
      <path
        d="M7.83331 13.6C8.258 14.4031 8.97942 15.0676 9.88885 15.4934C10.7983 15.9191 11.8465 16.083 12.8755 15.9604C13.9045 15.8378 14.8586 15.4353 15.594 14.8136L17 13.7451"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 16V13.6H14.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.1667 10.4C15.742 9.59687 15.0206 8.93238 14.1111 8.50664C13.2017 8.08091 12.1535 7.91699 11.1245 8.03959C10.0955 8.16219 9.1414 8.56467 8.40599 9.18637L7 10.2549"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7 8V10.4H9.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M7.83334 13.6C8.25804 14.4031 8.97945 15.0676 9.88888 15.4934C10.7983 15.9191 11.8465 16.083 12.8755 15.9604C13.9045 15.8378 14.8586 15.4353 15.594 14.8136L17 13.7451"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M17 16V13.6H14.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M16.1667 10.4C15.742 9.59687 15.0206 8.93238 14.1111 8.50664C13.2017 8.08091 12.1535 7.91699 11.1245 8.03959C10.0955 8.16219 9.1414 8.56467 8.40599 9.18637L7 10.2549"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M7 8V10.4H9.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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

RefreshCircle.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RefreshCircle.displayName = 'RefreshCircle';
export default createIcon(RefreshCircle);
