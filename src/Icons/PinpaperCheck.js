import * as React from 'react';
import PropTypes from 'prop-types';

const PinpaperCheck = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 12l-4.2 4.2L9 14.4m6-9.9h4V14M9 4.5H5V8m14 10v3H5v-9m4-9h6v3H9V3z"
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
        d="M15 12l-4.2 4.2L9 14.4m6-10.12c3.375.766 4.5 3.224 4.5 8.72 0 6.882-1.765 9-7.5 9s-7.5-2.118-7.5-9c0-5.496 1.125-7.954 4.5-8.72m6 0V3H9v1.28m6 0V6H9V4.28"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M19 21V4.5h-4V6H9V4.5H5V21h14z" fill={color} />
      <path
        d="M15 12l-4.2 4.2L9 14.4m6-9.9h4V21H5V4.5h4M9 3h6v3H9V3z"
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
        d="M15 12l-4.2 4.2L9 14.4m6-9.9h4V21H5V4.5h4M9 3h6v3H9V3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 12l-4.2 4.2L9 14.4m6-9.9h4V21H5V4.5h4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3h6v3H9V3z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

PinpaperCheck.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PinpaperCheck.displayName = 'SvgPinpaperCheck';
export default PinpaperCheck;
