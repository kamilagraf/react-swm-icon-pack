import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Copy = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 19a2 2 0 002 2h7a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v3M21 5a2 2 0 00-2-2h-7a2 2 0 00-2 2v1.5m7.5 7.5H19a2 2 0 002-2V8"
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
        d="M10.07 7c.317-3.021 1.772-4 5.43-4C19.706 3 21 4.294 21 8.5c0 3.658-.979 5.113-4 5.43M3 15.5C3 11.294 4.294 10 8.5 10c4.206 0 5.5 1.294 5.5 5.5 0 4.206-1.294 5.5-5.5 5.5C4.294 21 3 19.706 3 15.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 12a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" fill={color} />
      <path
        d="M17.5 14H19a2 2 0 002-2V5a2 2 0 00-2-2h-7a2 2 0 00-2 2v1.5M5 21h7a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
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
        d="M17.5 14H19a2 2 0 002-2V5a2 2 0 00-2-2h-7a2 2 0 00-2 2v1.5M5 21h7a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
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
        d="M17.5 14H19a2 2 0 002-2V5a2 2 0 00-2-2h-7a2 2 0 00-2 2v1.5"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"
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

Copy.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Copy.displayName = 'SvgCopy';
export default createIcon(Copy);
