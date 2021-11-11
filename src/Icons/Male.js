import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Male = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C13.1256 11 14.1643 11.3719 15 11.9996"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11V3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3L16 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5L8 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11V3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7L12 3L8 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"
        fill={color}
      />
      <path
        d="M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11V3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7L12 3L8 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11V3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7L12 3L8 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Male.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Male.displayName = 'Male';
export default createIcon(Male);
