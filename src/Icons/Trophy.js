import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Trophy = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 21h8m-4 0v-4a5 5 0 01-5-5V4h10v8a4.992 4.992 0 01-2 4m2-10h1.5a2.5 2.5 0 010 5H17M7 6H5.5a2.5 2.5 0 00-.5 4.95"
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
        d="M8 21h8m-4 0v-4m0 0a5 5 0 01-5-5V6m5 11a5 5 0 005-5V6m0 0h1.5a2.5 2.5 0 010 5H17m0-5a2 2 0 00-2-2H9a2 2 0 00-2 2m0 5H5.5a2.5 2.5 0 010-5H7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M7 4h10v8a5 5 0 01-10 0V4z" fill={color} />
      <path
        d="M8 21h8m-4 0v-4m0 0a5 5 0 01-5-5V4h10v8a5 5 0 01-5 5zm5-11h1.5a2.5 2.5 0 010 5H17M7 11H5.5a2.5 2.5 0 010-5H7"
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
        d="M8 21h8m-4 0v-4m0 0a5 5 0 01-5-5V4h10v8a5 5 0 01-5 5zm5-11h1.5a2.5 2.5 0 010 5H17M7 11H5.5a2.5 2.5 0 010-5H7"
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
        d="M17 6h1.5a2.5 2.5 0 010 5H17M7 11H5.5a2.5 2.5 0 010-5H7"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21h8m-4 0v-4m0 0a5 5 0 01-5-5V4h10v8a5 5 0 01-5 5z"
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

Trophy.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Trophy.displayName = 'SvgTrophy';
export default createIcon(Trophy);
