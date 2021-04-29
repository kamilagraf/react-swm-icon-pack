import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Package = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M5 9v11h14v-7M5 9h14a1 1 0 001-1V5a1 1 0 00-1-1h-8M5 9a1 1 0 01-1-1V5a1 1 0 011-1h2m3 9h4"
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
        d="M10 13s.5-.5 2-.5 2 .5 2 .5M5.5 8.808C6.658 8.913 9.19 9 12 9s5.342-.087 6.5-.192m-13 0c-.307-.028-.518-.057-.611-.086C4.444 8.583 4 7.612 4 6.5c0-1.111.444-2.083.889-2.222C5.333 4.138 8.444 4 12 4c3.556 0 6.667.139 7.111.278.445.139.889 1.11.889 2.222 0 1.111-.444 2.083-.889 2.222-.093.03-.304.058-.611.086m-13 0S5 10.611 5 13.5c0 2.889.389 5.417.778 5.778.389.36 3.11.722 6.222.722 3.111 0 5.833-.361 6.222-.722.39-.361.778-2.89.778-5.778 0-2.889-.5-4.692-.5-4.692"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M19 20V9H5v11h14z" fill={color} />
      <path
        d="M19 9v11H5V9m14 0H5m14 0a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v3a1 1 0 001 1m5 4h4"
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
        d="M19 9v11H5V9m14 0H5m14 0a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v3a1 1 0 001 1m5 4h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M10 13h4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 9v11H5V9m14 0H5m14 0a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v3a1 1 0 001 1"
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

Package.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Package.displayName = 'SvgPackage';
export default createIcon(Package);
