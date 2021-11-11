import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Cart2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H16H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.5 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M8 11V11.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 11V11.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 8H8C5 8 4 11.8899 4 13.5C4 19.5259 5.60338 20.5 12 20.5C18.3966 20.5 20 19.5259 20 13.5C20 11.8899 19 8 16 8Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7L8.00001 8"
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
        opacity="0.15"
        d="M4.97043 9.81038C5.06819 8.78391 5.93031 8 6.96142 8H17.0386C18.0697 8 18.9318 8.78391 19.0296 9.81038L19.7915 17.8104C19.9033 18.9846 18.9799 20 17.8005 20H6.19952C5.02004 20 4.0967 18.9846 4.20853 17.8104L4.97043 9.81038Z"
        fill={color}
      />
      <path d="M8 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16H8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 11.01V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16H8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339Z"
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
    default:
      return <Outline />;
  }
};

Cart2.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cart2.displayName = 'Cart2';
export default createIcon(Cart2);
