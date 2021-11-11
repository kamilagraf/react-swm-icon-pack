import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Headphones = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14H18C16.8954 14 16 14.8954 16 16V19C16 20.1046 16.8954 21 18 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14"
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
        d="M3 21C5 21 8 20.862 8 18.5V15.5C8 13.0511 5 13 3 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21C19 21 16 20.862 16 18.5V15.5C16 13.138 19 13 21 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 13V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path d="M3 14H6C7.10457 14 8 14.8954 8 16V19C8 20.1046 7.10457 21 6 21H3V14Z" fill={color} />
        <path d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V21Z" fill={color} />
      </g>
      <path
        d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14"
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
        d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14"
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

Headphones.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Headphones.displayName = 'Headphones';
export default createIcon(Headphones);
