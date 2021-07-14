import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const RedoCircle = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 10v3m0 0h-3m3 0l-1.534-1.519a5.098 5.098 0 00-2.965-1.593M7 13c.463-1.116 1.25-1.872 2.242-2.463m5.723 9.963A9 9 0 1119 17.657"
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
        d="M17 10v3m0 0h-3m3 0l-1.534-1.519a5.098 5.098 0 00-2.965-1.593 4.908 4.908 0 00-3.259.649C8.25 11.128 7.463 11.884 7 13m14-1a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
      <path
        d="M17 10v3m0 0h-3m3 0l-1.534-1.519a5.098 5.098 0 00-2.965-1.593 4.908 4.908 0 00-3.259.649C8.25 11.128 7.463 11.884 7 13m14-1a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M17 10v3m0 0h-3m3 0l-1.534-1.519a5.098 5.098 0 00-2.965-1.593 4.908 4.908 0 00-3.259.649C8.25 11.128 7.463 11.884 7 13m14-1a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M17 10v3m0 0h-3m3 0l-1.534-1.519a5.098 5.098 0 00-2.965-1.593 4.908 4.908 0 00-3.259.649C8.25 11.128 7.463 11.884 7 13"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

RedoCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RedoCircle.displayName = 'RedoCircle';
export default createIcon(RedoCircle);
