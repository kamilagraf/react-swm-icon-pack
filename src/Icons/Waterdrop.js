import * as React from 'react';
import PropTypes from 'prop-types';

const Waterdrop = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 14c0 4.418-3.582 7-7 7s-7-2.582-7-7c0-3.418 2.582-8 7-11 2.834 1.924 4.912 4.499 6.038 7M11.5 16.5A2.5 2.5 0 019 14"
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
        d="M11.5 16.5A2.5 2.5 0 019 14m-4 0c0-3.126 2.158-7.224 5.905-10.196a1.759 1.759 0 012.19 0C16.841 6.776 19 10.874 19 14c0 4.418-3.582 7-7 7s-7-2.582-7-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 14c0-3.418 2.582-8 7-11 4.418 3 7 7.582 7 11 0 4.418-3.582 7-7 7s-7-2.582-7-7z" fill={color} />
      <path
        d="M11.5 16.5A2.5 2.5 0 019 14m-4 0c0-3.418 2.582-8 7-11 4.418 3 7 7.582 7 11 0 4.418-3.582 7-7 7s-7-2.582-7-7z"
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
        d="M11.5 16.5A2.5 2.5 0 019 14m-4 0c0-3.418 2.582-8 7-11 4.418 3 7 7.582 7 11 0 4.418-3.582 7-7 7s-7-2.582-7-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M11.5 16.5A2.5 2.5 0 019 14" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5 14c0-3.418 2.582-8 7-11 4.418 3 7 7.582 7 11 0 4.418-3.582 7-7 7s-7-2.582-7-7z"
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

Waterdrop.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Waterdrop.displayName = 'SvgWaterdrop';
export default Waterdrop;
