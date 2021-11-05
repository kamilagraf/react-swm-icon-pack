import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Block1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20.5 9.035A9 9 0 1020.064 16M12 12l6.364 6.364M5.636 5.636L10 10M5.636 18.364L18.364 5.636"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM5.636 18.364L18.364 5.636M5.636 5.636l12.728 12.728"
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
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
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

Block1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Block1.displayName = 'Block1';
export default createIcon(Block1);
