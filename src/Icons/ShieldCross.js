import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const ShieldCross = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3l8 4c0 5.193-2.784 12.51-8 14-5.216-1.49-8-8.807-8-14l4-2m7 5l-4 4-2-2"
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
        d="M15 10l-4 4-2-2m4.07 8.6c3.793-1.772 6.096-6.736 6.742-11.138.22-1.499-.668-2.89-2.023-3.568l-4-2a4 4 0 00-3.578 0l-4 2c-1.355.678-2.243 2.07-2.023 3.568.647 4.402 2.95 9.366 6.743 11.137a2.53 2.53 0 002.139 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 7l8-4 8 4c0 5.193-2.784 12.51-8 14-5.216-1.49-8-8.807-8-14z" fill={color} />
      <path
        d="M15 10l-4 4-2-2m3-9L4 7c0 5.193 2.784 12.51 8 14 5.216-1.49 8-8.807 8-14l-8-4z"
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
        d="M15 10l-4 4-2-2m3-9L4 7c0 5.193 2.784 12.51 8 14 5.216-1.49 8-8.807 8-14l-8-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M20 7c0 5.193-2.784 12.51-8 14" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 7l-8-4-8 4c0 5.193 2.784 12.51 8 14m3-11l-4 4-2-2"
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

ShieldCross.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ShieldCross.displayName = 'SvgShieldCross';
export default createIcon(ShieldCross);
