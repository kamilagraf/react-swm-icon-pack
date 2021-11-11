import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const PinpaperMinus = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3H9V4.5V6H15V4.5V3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4.5H5V14M15 4.5H19V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13V21H5V18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3H15V4.27928V6H9V4.27928V3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 4.2793C18.3745 5.04621 19.5 7.5037 19.5 13C19.5 19.8824 17.7353 22 12 22C6.26471 22 4.5 19.8824 4.5 13C4.5 7.5037 5.62549 5.04621 9 4.2793"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M19 21V4.5H15V6H9V4.5H5V21H19Z" fill={color} />
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4.5H5V21H19V4.5H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3H9V4.5V6H15V4.5V3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4.5H5V21H19V4.5H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3H9V4.5V6H15V4.5V3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

PinpaperMinus.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PinpaperMinus.displayName = 'PinpaperMinus';
export default createIcon(PinpaperMinus);
