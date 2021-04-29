import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const PinpaperPlus = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 11v6m-3-3h1m5 0h-3m3-9.5h4V7M9 4.5H5V21h2m12-10v10h-8M9 3h6v3H9V3z"
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
        d="M12 11v6m-3-3h6m0-9.72c3.375.766 4.5 3.224 4.5 8.72 0 6.882-1.765 9-7.5 9s-7.5-2.118-7.5-9c0-5.496 1.125-7.954 4.5-8.72m6 0V3H9v1.28m6 0V6H9V4.28"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M19 20V3.5h-4V5H9V3.5H5V20h14z" fill={color} />
      <path
        d="M12 11v6m-3-3h6m0-9.5h4V21H5V4.5h4M9 3h6v3H9V3z"
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
        d="M12 11v6m-3-3h6m0-9.5h4V21H5V4.5h4M9 3h6v3H9V3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 11v6m-3-3h6m0-9.5h4V21H5V4.5h4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

PinpaperPlus.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PinpaperPlus.displayName = 'SvgPinpaperPlus';
export default createIcon(PinpaperPlus);
