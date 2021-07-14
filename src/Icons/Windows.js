import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Windows = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 20a1 1 0 01-1-1v-9a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1H8m3-17a1 1 0 00-1 1v5m10 3a1 1 0 001-1V4a1 1 0 00-1-1h-5M3 12h13.93M21 6H10"
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
        d="M10 9c-3.111 0-5.833.306-6.222.611-.246.193-.492 1.118-.64 2.389M10 9c3.111 0 5.833.306 6.222.611.246.193.492 1.118.64 2.389M10 9V7.5c0-.525.021-1.032.058-1.5m-6.92 6C3.054 12.741 3 13.6 3 14.5c0 2.444.389 4.583.778 4.889.389.305 3.11.611 6.222.611 3.111 0 5.833-.306 6.222-.611.39-.306.778-2.445.778-4.889 0-.9-.053-1.759-.139-2.5M3.14 12H15.5m1.361 0H15.5m-5.442-6c.102-1.315.328-2.316.553-2.5.306-.25 2.445-.5 4.889-.5 2.444 0 4.583.25 4.889.5.225.184.45 1.185.553 2.5M10.058 6h10.884m0 0c.037.468.058.975.058 1.5 0 1.446-.16 2.761-.364 3.473-.105.37-.45.548-.83.605-1.167.175-2.153.422-4.306.422"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 10a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z" fill={color} />
      <path
        d="M10 9V4a1 1 0 011-1h9a1 1 0 011 1v7a1 1 0 01-1 1H3m18-6H10M4 20h12a1 1 0 001-1v-9a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1z"
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
        d="M10 9V4a1 1 0 011-1h9a1 1 0 011 1v7a1 1 0 01-1 1H3m18-6H10M4 20h12a1 1 0 001-1v-9a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1z"
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
        d="M10 9V4a1 1 0 011-1h9a1 1 0 011 1v7a1 1 0 01-1 1h-3m4-6H10"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12H3m1 8h12a1 1 0 001-1v-9a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1z"
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

Windows.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Windows.displayName = 'Windows';
export default createIcon(Windows);
