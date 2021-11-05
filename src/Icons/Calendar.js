import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Calendar = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 11h11M6 5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-3M15 3v4M9 3v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 5h3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M15 2.5v4M9 2.5v4M3.517 11.5h16.966M3.5 12.5c0 6.5 2 8.5 8.5 8.5s8.5-2 8.5-8.5c0-.346-.006-.68-.017-1C20.274 5.793 18.154 4 12 4s-8.274 1.793-8.483 7.5c-.011.32-.017.654-.017 1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 19a2 2 0 002 2h12a2 2 0 002-2v-8H4v8z" fill={color} />
      <path
        d="M4 11h16M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zM15 3v4M9 3v4"
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
        d="M4 11h16M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zM15 3v4M9 3v4"
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

Calendar.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Calendar.displayName = 'Calendar';
export default createIcon(Calendar);
