import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Filters1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 14a2 2 0 100-4 2 2 0 000 4zm0 0v6m-7-4a2 2 0 100 4 2 2 0 000-4zm0 0v-6M5 20v-9m7-7v3m7-3v3M7 6a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M19 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v6m0-10V4m-7 12a2 2 0 100 4 2 2 0 000-4zm0 0V4M5 8a2 2 0 100-4 2 2 0 000 4zm0 0v12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M21 12a2 2 0 11-4 0 2 2 0 014 0zM14 18a2 2 0 11-4 0 2 2 0 014 0zM7 6a2 2 0 11-4 0 2 2 0 014 0z" fill={color} opacity={0.15} />
      <path
        d="M19 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v6m0-10V4m-7 12a2 2 0 100 4 2 2 0 000-4zm0 0V4M5 8a2 2 0 100-4 2 2 0 000 4zm0 0v12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M19 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v6m0-10V4m-7 12a2 2 0 100 4 2 2 0 000-4zm0 0V4M5 8a2 2 0 100-4 2 2 0 000 4zm0 0v12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M19 14v6m0-10V4m-7 12V4M5 8v12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 12a2 2 0 11-4 0 2 2 0 014 0zM14 18a2 2 0 11-4 0 2 2 0 014 0zM7 6a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={secondaryColor}
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

Filters1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Filters1.displayName = 'SvgFilters1';
export default createIcon(Filters1);
