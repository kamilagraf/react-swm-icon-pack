import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Bell = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 9c0 3 2 8 2 8h-5m0 0H9v1a3 3 0 006 0v-1zm0-13.196A6 6 0 006 9c0 4-2 8-2 8h2"
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
        d="M9 17v1c0 1.657 1.343 2.5 3 2.5s3-.843 3-2.5v-1M6 8c0-3.314 2.686-5 6-5 3.313 0 6 1.686 6 5 0 1.94.705 4.113 1.431 5.839.604 1.433-.409 3.161-1.964 3.161H6.532c-1.554 0-2.567-1.728-1.964-3.161C5.295 12.113 6 9.939 6 8z"
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
        d="M9 17H4s2-4 2-8a6 6 0 1112 0c0 3 2 8 2 8h-5m-6 0v1a3 3 0 006 0v-1m-6 0h6"
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
        d="M9 17H4s2-4 2-8a6 6 0 1112 0c0 3 2 8 2 8h-5m-6 0v1a3 3 0 006 0v-1m-6 0h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 17v1a3 3 0 106 0v-1" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 3a6 6 0 00-6 6c0 4-2 8-2 8h16s-2-4-2-8a6 6 0 00-6-6z"
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

Bell.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Bell.displayName = 'SvgBell';
export default createIcon(Bell);
