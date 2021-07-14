import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Gift2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 10H5v4m5-4h4m-4 0v10h4V10m-4 0V7h4v3m-9 8v2h14v-6M4 7h16v3H4V7zm7.866-.15c.549-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3zm.196 0c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
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
        d="M18.5 9.885c.307-.017.518-.034.611-.052.445-.083.889-.666.889-1.333 0-.667-.444-1.25-.889-1.333-.358-.068-2.45-.135-5.111-.158m4.5 2.876s.5 1.726.5 4.615c0 2.889-.389 5.417-.778 5.778-.302.28-2.014.561-4.222.672m4.5-11.065c-.874.048-2.531.089-4.5.106m-8.5-.106a6.221 6.221 0 01-.611-.052C4.444 9.75 4 9.167 4 8.5c0-.667.444-1.25.889-1.333.358-.068 2.45-.135 5.111-.158M5.5 9.885S5 11.611 5 14.5c0 2.889.389 5.417.778 5.778.302.28 2.014.561 4.222.672M5.5 9.885c.874.048 2.531.089 4.5.106m0 0a227.187 227.187 0 004 0m-4 0v10.96m0-10.96V7.01m0 13.941a39.948 39.948 0 004 0M10 7.01a227.177 227.177 0 014 0m0 2.982v10.96m0-10.96V7.01m-2.134-.159c.549-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3zm.196 0c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M5 10h14v10H5V10zM4 7h16v3H4V7z" opacity={0.15} fill={color} />
      <path
        d="M19 10.08v10h-5m5-10h1v-3h-6m5 3h-5m-9 0v10h5m-5-10H4v-3h6m-5 3h5m2-3c-.833-1.833-3-5.5-5-3.5s2.5 3.334 5 3.5zm0 0c.833-1.833 3-5.5 5-3.5s-2.5 3.334-5 3.5zm-2 3v10m0-10h4m-4 0v-3m0 13h4m0 0v-10m0 0v-3m0 0h-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M19 10.08v10h-5m5-10h1v-3h-6m5 3h-5m-9 0v10h5m-5-10H4v-3h6m-5 3h5m2-3c-.833-1.833-3-5.5-5-3.5s2.5 3.334 5 3.5zm0 0c.833-1.833 3-5.5 5-3.5s-2.5 3.334-5 3.5zm-2 3v10m0-10h4m-4 0v-3m0 13h4m0 0v-10m0 0v-3m0 0h-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M10 7v13h4V7m-2.134-.15c.55-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3zm.196 0c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10h4m0 10h-4m0-13h4m-9 3h14v10H5V10zM4 7h16v3H4V7z"
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
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

Gift2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Gift2.displayName = 'Gift2';
export default createIcon(Gift2);
