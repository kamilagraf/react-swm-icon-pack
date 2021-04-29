import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const PinpaperFilled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 4.5h4V8M9 4.5H5V14m3 3h8m-8-4h6m5 0v8H5v-3M9 3h6v3H9V3z"
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
        d="M9 17h6m-6-4h4m2-8.72c3.375.766 4.5 3.224 4.5 8.72 0 6.882-1.765 9-7.5 9s-7.5-2.118-7.5-9c0-5.496 1.125-7.954 4.5-8.72m6 0V3H9v1.28m6 0V6H9V4.28"
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
        d="M15 4.5h4V21H5V4.5h4M8 17h8m-8-4h6M9 3h6v3H9V3z"
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
        d="M15 4.5h4V21H5V4.5h4M8 17h8m-8-4h6M9 3h6v3H9V3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 4.5h4V21H5V4.5h4M8 17h8m-8-4h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

PinpaperFilled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PinpaperFilled.displayName = 'SvgPinpaperFilled';
export default createIcon(PinpaperFilled);
