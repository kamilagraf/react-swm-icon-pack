import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Filters1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M19 7V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M19 14V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M12 16V10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M12 7V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M5 11V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path
        d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M19 10V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M19 14V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M12 16V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M5 8V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path
        d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path
          d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
          fill={color}
        />
        <path
          d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
          fill={color}
        />
        <path d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6Z" fill={color} />
      </g>
      <path d="M19 10V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M19 14V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M12 16V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M5 8V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path
        d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M19 10V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M19 14V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M12 16V4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path d="M5 8V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
      <path
        d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
      <path
        d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
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

Filters1.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Filters1.displayName = 'Filters1';
export default createIcon(Filters1);
