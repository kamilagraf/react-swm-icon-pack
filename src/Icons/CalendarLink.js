import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const CalendarLink = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 5a2 2 0 00-2 2v12a2 2 0 002 2h2m12-8V7a2 2 0 00-2-2h-3m0-2v4M9 3v4m-5 4h16m-6 8h3m-3-2h-1a2 2 0 100 4h1m3 0h1a2 2 0 100-4h-1M9 5h3"
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
        d="M14 19h3m-3-2h-1a2 2 0 100 4h1m3 0h1a2 2 0 100-4h-1M15 2v4M9 2v4m-5.483 5c-.011.32-.017.654-.017 1 0 4.91 1.14 7.252 4.5 8.104M3.517 11C3.726 5.293 5.846 3.5 12 3.5s8.274 1.793 8.483 7.5M3.517 11h16.966m0 0c.011.32.017.654.017 1 0 .72-.025 1.386-.077 2"
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
        d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2m7-18v4M9 3v4m-5 4h16m-6 8h3m-3-2h-1a2 2 0 100 4h1m3 0h1a2 2 0 100-4h-1"
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
        d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2m7-18v4M9 3v4m-5 4h16m-6 8h3m-3-2h-1a2 2 0 100 4h1m3 0h1a2 2 0 100-4h-1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M4 11h16" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2m6-2h3m-3-2h-1a2 2 0 100 4h1m3 0h1a2 2 0 100-4h-1"
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

CalendarLink.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarLink.displayName = 'SvgCalendarLink';
export default createIcon(CalendarLink);
