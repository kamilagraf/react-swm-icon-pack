import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Crown2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 8l2 12h7M3 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0l2.75 2.25.25.204M21 8l-2 12h-3m5-12l-5.5 4.5M21 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8.5 12.5L12 7m0 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0l2 3.143"
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
        d="M3 8l1.443 8.658A4 4 0 008.389 20h7.223a4 4 0 003.945-3.342L21 8M3 8l3.756 3.073A2 2 0 009.71 10.6L12 7M3 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm18 0l-3.756 3.073a2 2 0 01-2.954-.474L12 7m9 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 20L3 8l5.5 4.5L12 7l3.5 5.5L21 8l-2 12H5z" fill={color} />
      <path
        d="M21 8l-2 12H5L3 8m18 0l-5.5 4.5L12 7m9 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9-1l-3.5 5.5L3 8m9-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
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
        d="M21 8l-2 12H5L3 8m18 0l-5.5 4.5L12 7m9 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9-1l-3.5 5.5L3 8m9-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M5 20L3 8l5.5 4.5L12 7l3.5 5.5L21 8l-2 12H5z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
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

Crown2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Crown2.displayName = 'Crown2';
export default createIcon(Crown2);
