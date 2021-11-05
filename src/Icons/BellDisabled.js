import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const BellDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8.683 4A6 6 0 0118 9c0 1.783.707 4.274 1.28 6M3 3l18 18M5.96 10C5.68 13.64 4 17 4 17h8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.772 19.148A3 3 0 019 18v-1" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M8 4.082C9.062 3.362 10.463 3 12 3c3.314 0 6 1.686 6 5 0 1.94.705 4.113 1.432 5.839.23.548.225 1.14.043 1.661M5.842 9.71c-.248 1.44-.755 2.898-1.273 4.128C3.966 15.271 4.978 17 6.532 17H13M9 17v1c0 1.657 1.343 2.5 3 2.5 1.357 0 2.504-.566 2.874-1.681M3 3l18 18"
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
        d="M8.683 4A6 6 0 0118 9c0 1.783.707 4.274 1.28 6M3 3l18 18M5.96 10C5.68 13.64 4 17 4 17h8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.772 19.148A3 3 0 019 18v-1" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8.683 4A6 6 0 0118 9c0 1.783.707 4.274 1.28 6M3 3l18 18M5.96 10C5.68 13.64 4 17 4 17h8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.772 19.148A3 3 0 019 18v-1" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

BellDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

BellDisabled.displayName = 'BellDisabled';
export default createIcon(BellDisabled);
