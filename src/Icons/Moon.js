import * as React from 'react';
import PropTypes from 'prop-types';

const Moon = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 12c0-4.889-4-8.869-9-9 5.683 5.758-.048 15.618-8 14 1.66 2.432 4.771 4 8 4 3.214 0 5.94-1.588 7.523-4"
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
        d="M4.672 18.797c-.699-.564-.114-1.573.78-1.652 5.79-.51 9.608-7.07 7.007-12.144-.41-.802.124-1.871.988-1.615C17.244 4.51 20 7.942 20 12c0 4.971-3.881 9-9 9-2.34 0-4.62-.824-6.328-2.203z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 17c7.952 1.618 13.683-8.242 8-14 5 .131 9 4.111 9 9 0 4.971-3.881 9-9 9-3.229 0-6.34-1.568-8-4z" fill={color} />
      <path
        d="M3 17c7.952 1.618 13.683-8.242 8-14 5 .131 9 4.111 9 9 0 4.971-3.881 9-9 9-3.229 0-6.34-1.568-8-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M3 17c7.952 1.618 13.683-8.242 8-14 5 .131 9 4.111 9 9 0 4.971-3.881 9-9 9-3.229 0-6.34-1.568-8-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M3 17c7.952 1.618 13.683-8.242 8-14" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 17c1.66 2.432 4.771 4 8 4 5.119 0 9-4.029 9-9 0-4.889-4-8.869-9-9"
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

Moon.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Moon.displayName = 'SvgMoon';
export default Moon;
