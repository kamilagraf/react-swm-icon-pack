import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const UsersMore = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18.5 14h.5a4 4 0 014 4v1h-2M5.5 14H5a4 4 0 00-4 4v1h2m14-8a3 3 0 100-6M7 11a3 3 0 010-6m3 9h4a4 4 0 014 4v1H6v-1a4 4 0 014-4zm5-6a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M19 14c2.21 0 4 2 4 3.5a1.5 1.5 0 01-1.5 1.5H21M5 14c-2.21 0-4 2-4 3.5A1.5 1.5 0 002.5 19H3m14-8a3 3 0 100-6M7 11a3 3 0 010-6m11 12.5c0-2.5-3-3.5-6-3.5s-6 1-6 3.5A1.5 1.5 0 007.5 19h9a1.5 1.5 0 001.5-1.5zM15 8a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 11a3 3 0 100-6 3 3 0 000 6z" fill={color} />
      <path
        d="M18.5 14h.5a4 4 0 014 4v1h-2M5.5 14H5a4 4 0 00-4 4v1h2m14-8a3 3 0 100-6M7 11a3 3 0 010-6m3 9h4a4 4 0 014 4v1H6v-1a4 4 0 014-4zm5-6a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M18.5 14h.5a4 4 0 014 4v1h-2M5.5 14H5a4 4 0 00-4 4v1h2m14-8a3 3 0 100-6M7 11a3 3 0 010-6m3 9h4a4 4 0 014 4v1H6v-1a4 4 0 014-4zm5-6a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M12 11a3 3 0 100-6 3 3 0 000 6zM14 14h-4a4 4 0 00-4 4v1h12v-1a4 4 0 00-4-4z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14h.5a4 4 0 014 4v1h-2M5.5 14H5a4 4 0 00-4 4v1h2m14-8a3 3 0 100-6M7 11a3 3 0 010-6"
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

UsersMore.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

UsersMore.displayName = 'SvgUsersMore';
export default createIcon(UsersMore);
