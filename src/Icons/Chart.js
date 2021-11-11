import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Chart = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 12C21 14.4853 19.9926 16.7353 18.364 18.364C16.7353 19.9926 14.4853 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.6655 3 17.0604 4.15875 18.7083 6"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 3V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 12H12L18.364 18.364" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M3 12C3 16.9706 7.02944 21 12 21C14.4853 21 16.7353 19.9926 18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 3V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 12H12L18.364 18.364" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V12H3C3 16.9706 7.02944 21 12 21Z" fill={color} />
      <path
        d="M3 12C3 16.9706 7.02944 21 12 21C14.4853 21 16.7353 19.9926 18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 3V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 12H12L18.364 18.364" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M3 12C3 16.9706 7.02944 21 12 21C14.4853 21 16.7353 19.9926 18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 3V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 12H12L18.364 18.364" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Chart.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Chart.displayName = 'Chart';
export default createIcon(Chart);
