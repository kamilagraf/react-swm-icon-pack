import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Edit3 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M13 15L14 14L17 11L13 7L10 10L4 16V20H8L10.5 17.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 10L14 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10V4H12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 20H20V4H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9.94446 10.1875L13.9445 14.1875" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.94444 10.1875L4.946 15.1859C4.28735 15.8446 3.76731 16.6441 3.609 17.562C3.44915 18.4888 3.39595 19.639 3.94444 20.1875C4.49294 20.736 5.64311 20.6828 6.56993 20.5229C7.48784 20.3646 8.28735 19.8446 8.946 19.1859L13.9444 14.1875C13.9444 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94444 10.1875 9.94444 10.1875Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M4 20H8L14 14L10 10L4 16V20Z" fill={color} />
      <path d="M17 11L13 7L10 10L4 16V20H8L14 14L17 11Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10L14 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 20H20V4H4V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M17 11L13 7L10 10L4 16V20H8L14 14L17 11Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10L14 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 20H20V4H4V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Edit3.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Edit3.displayName = 'Edit3';
export default createIcon(Edit3);
