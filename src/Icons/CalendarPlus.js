import * as React from 'react';
import PropTypes from 'prop-types';

const CalendarPlus = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 5a2 2 0 00-2 2v12a2 2 0 002 2h3M20 9V7a2 2 0 00-2-2h-3m0-2v4M9 3v4m-5 4h5m8 2v8m-4-4h8M9 5h3"
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
        d="M17 13v8m-4-4h8M15 2v4M9 2v4m-5.483 5c-.011.32-.017.654-.017 1 0 5.78 1.581 8.001 6.5 8.423M3.517 11C3.726 5.293 5.846 3.5 12 3.5c5.78 0 8.001 1.581 8.423 6.5M3.517 11H12"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m8 2v8m-4-4h8"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m8 2v8m-4-4h8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M4 11h5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m8-8v8m-4-4h8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 3v4M9 3v4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

CalendarPlus.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarPlus.displayName = 'SvgCalendarPlus';
export default CalendarPlus;
