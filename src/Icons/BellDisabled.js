import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const BellDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M14.772 19.148A3 3 0 019 18v-1h3.5M15 3.804A6 6 0 008.683 4M6 17H4s1.68-3.36 1.96-7M18 9c0 1.727.663 4.116 1.225 5.833M3 3l18 18"
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
        d="M9 17v1c0 1.657 1.343 2.5 3 2.5 1.357 0 2.504-.566 2.874-1.681M8 4.082C9.062 3.362 10.463 3 12 3c3.314 0 6 1.686 6 5 0 1.94.705 4.113 1.432 5.839.23.548.225 1.14.043 1.661M5.841 9.71c-.248 1.44-.755 2.898-1.273 4.128C3.966 15.271 4.978 17 6.532 17H13M3 3l18 18"
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
        d="M3 3l18 18m-6.228-1.852A3 3 0 019 18v-1m0 0H4s1.68-3.36 1.96-7M9 17h3.5m6.78-2C18.707 13.274 18 10.783 18 9a6 6 0 00-9.317-5"
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
        d="M3 3l18 18m-6.228-1.852A3 3 0 019 18v-1m0 0H4s1.68-3.36 1.96-7M9 17h3.5m6.78-2C18.707 13.274 18 10.783 18 9a6 6 0 00-9.317-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 17v1a3 3 0 005.83 1M3 3l18 18" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.42 4.184A6 6 0 0118 9c0 2.232.622 4.463 1.173 6M5.945 10.187C5.623 13.755 4 17 4 17h8.5"
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

BellDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

BellDisabled.displayName = 'SvgBellDisabled';
export default createIcon(BellDisabled);
