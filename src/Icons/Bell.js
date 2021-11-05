import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Bell = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M9 17v1a3 3 0 006 0v-1M18 9c0 3 2 8 2 8H9M15 3.825A5.897 5.897 0 0012 3C8.732 3 6 5.732 6 9c0 4-2 8-2 8h2"
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
        d="M12 3C8.686 3 6 4.686 6 8c0 1.94-.705 4.113-1.432 5.839C3.965 15.272 4.978 17 6.532 17h10.936c1.554 0 2.567-1.728 1.964-3.161C18.705 12.113 18 9.939 18 8c0-3.314-2.686-5-6-5zM9 17v1c0 1.657 1.343 2.5 3 2.5s3-.843 3-2.5v-1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 3a6 6 0 00-6 6c0 4-2 8-2 8h16s-2-4-2-8a6 6 0 00-6-6z" fill={color} />
      <path
        d="M9 17v1a3 3 0 006 0v-1M20 17s-2-5-2-8c0-3.268-2.732-6-6-6S6 5.732 6 9c0 4-2 8-2 8h16z"
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
        d="M9 17v1a3 3 0 006 0v-1M20 17s-2-5-2-8c0-3.268-2.732-6-6-6S6 5.732 6 9c0 4-2 8-2 8h16z"
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
    default:
      return <Outline />;
  }
};

Bell.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Bell.displayName = 'Bell';
export default createIcon(Bell);
