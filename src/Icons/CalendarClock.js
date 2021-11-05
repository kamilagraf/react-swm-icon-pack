import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CalendarClock = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M16 21.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 15.2v1.688l.9 1.012M4 11h5M9 3v4M15 3v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 5h3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M15 5h3a2 2 0 012 2v2M6 5a2 2 0 00-2 2v12a2 2 0 002 2h3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M16 21.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 15.2v1.688l.9 1.012M15 2.5v4M9 2.5v4M3.517 11.5H9M8 20.604c-3.36-.852-4.5-3.195-4.5-8.104 0-.346.006-.68.017-1C3.726 5.793 5.846 4 12 4c5.368 0 7.667 1.364 8.305 5.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M16 21.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 15.2v1.688l.9 1.012M4 11h5M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3M15 3v4M9 3v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M16 21.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 15.2v1.688l.9 1.012M4 11h5M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3M15 3v4M9 3v4"
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

CalendarClock.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarClock.displayName = 'CalendarClock';
export default createIcon(CalendarClock);
