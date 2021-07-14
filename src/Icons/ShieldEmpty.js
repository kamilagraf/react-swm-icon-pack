import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ShieldEmpty = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3l8 4c0 5.193-2.784 12.51-8 14-5.216-1.49-8-8.807-8-14l4-2"
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
        d="M4.188 9.462c-.22-1.499.668-2.89 2.023-3.568l4-2a4 4 0 013.578 0l4 2c1.355.678 2.243 2.07 2.023 3.568-.646 4.402-2.95 9.366-6.743 11.137a2.53 2.53 0 01-2.138 0c-3.793-1.77-6.096-6.735-6.743-11.137z"
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
        d="M4 7l8-4 8 4c0 5.193-2.784 12.51-8 14-5.216-1.49-8-8.807-8-14z"
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
        d="M4 7l8-4 8 4c0 5.193-2.784 12.51-8 14-5.216-1.49-8-8.807-8-14z"
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
      <path d="M20 7l-8-4-8 4c0 5.193 2.784 12.51 8 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ShieldEmpty.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ShieldEmpty.displayName = 'ShieldEmpty';
export default createIcon(ShieldEmpty);
