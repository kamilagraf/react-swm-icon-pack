import * as React from 'react';
import PropTypes from 'prop-types';

const RefreshSmall = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 7v3h3m9 7v-3h-3m2-4c-.51-1.004-1.375-1.835-2.467-2.367M10.95 7.05c-1.234.154-2.38.657-3.262 1.434L6 9.819M7 14c.51 1.004 1.375 1.835 2.467 2.367a6.258 6.258 0 001.675.538c.625.108 1.27.125 1.909.046 1.234-.154 2.38-.657 3.262-1.434L18 14.181"
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
        d="M6 7v3h3m9 7v-3h-3m2-4c-.51-1.004-1.375-1.835-2.467-2.367a6.414 6.414 0 00-3.584-.584c-1.234.154-2.38.657-3.262 1.434L6 9.819M7 14c.51 1.004 1.375 1.835 2.467 2.367a6.413 6.413 0 003.584.584c1.234-.154 2.38-.657 3.262-1.434L18 14.181"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M6 7v3h3m9 7v-3h-3m2-4c-.51-1.004-1.375-1.835-2.467-2.367a6.414 6.414 0 00-3.584-.584c-1.234.154-2.38.657-3.262 1.434L6 9.819M7 14c.51 1.004 1.375 1.835 2.467 2.367a6.413 6.413 0 003.584.584c1.234-.154 2.38-.657 3.262-1.434L18 14.181"
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
        d="M6 7v3h3m9 7v-3h-3m2-4c-.51-1.004-1.375-1.835-2.467-2.367a6.414 6.414 0 00-3.584-.584c-1.234.154-2.38.657-3.262 1.434L6 9.819M7 14c.51 1.004 1.375 1.835 2.467 2.367a6.413 6.413 0 003.584.584c1.234-.154 2.38-.657 3.262-1.434L18 14.181"
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
        d="M17 10c-.51-1.004-1.375-1.835-2.467-2.367a6.414 6.414 0 00-3.584-.584c-1.234.154-2.38.657-3.262 1.434L6 9.819M7 14c.51 1.004 1.375 1.835 2.467 2.367a6.413 6.413 0 003.584.584c1.234-.154 2.38-.657 3.262-1.434L18 14.181"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 7v3h3m9 7v-3h-3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

RefreshSmall.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RefreshSmall.displayName = 'SvgRefreshSmall';
export default RefreshSmall;
