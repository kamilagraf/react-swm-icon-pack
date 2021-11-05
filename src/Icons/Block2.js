import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Block2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3a9 9 0 106 2.292M5.636 5.636l12.728 12.728"
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
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM5.636 5.636l12.728 12.728"
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
      <path d="M5.636 5.636l12.728 12.728" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M5.636 5.636l12.728 12.728" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
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

Block2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Block2.displayName = 'Block2';
export default createIcon(Block2);
