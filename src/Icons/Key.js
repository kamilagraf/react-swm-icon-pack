import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Key = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M18 6L20 8L17 11L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6915 12.3086L21.0001 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5C13 16.4247 12.7206 17.2847 12.2415 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M18 6L20 8L17 11L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6915 12.3086L21.0001 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z"
        fill={color}
      />
      <path d="M18 6L20 8L17 11L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6915 12.3086L21.0001 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M18 6L20 8L17 11L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6915 12.3086L21.0001 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z"
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

Key.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Key.displayName = 'Key';
export default createIcon(Key);
