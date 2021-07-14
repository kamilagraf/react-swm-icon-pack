import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Home1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 3l8 7v10h-5m0-4a3 3 0 00-6 0v4H4V10l4-3.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M6.5 7c1.461-1.461 3.094-2.581 4.198-3.26a2.474 2.474 0 012.605 0C14.406 4.42 16.039 5.54 17.5 7c3.169 3.168 3 5 3 8 0 1.41-.11 2.599-.227 3.463-.124.91-.917 1.537-1.834 1.537H17a2 2 0 01-2-2v-2a3 3 0 00-6 0v2a2 2 0 01-2 2H5.562c-.918 0-1.711-.627-1.834-1.537A25.992 25.992 0 013.5 15c0-3-.168-4.832 3-8z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 10l8-7 8 7v10h-5v-4a3 3 0 00-6 0v4H4V10z" fill={color} />
      <path d="M4 10l8-7 8 7v10h-5v-4a3 3 0 00-6 0v4H4V10z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 10l8-7 8 7v10h-5v-4a3 3 0 00-6 0v4H4V10z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 3l8 7v10" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3l-8 7v10h5v-4a3 3 0 116 0v4h5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Home1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Home1.displayName = 'Home1';
export default createIcon(Home1);
