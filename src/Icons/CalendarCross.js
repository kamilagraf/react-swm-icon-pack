import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const CalendarCross = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 5a2 2 0 00-2 2v12a2 2 0 002 2h3M20 9V7a2 2 0 00-2-2h-3m0-2v4M9 3v4m-5 4h5m11 3l-7 7m0-7l7 7M9 5h3"
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
        d="M20 14l-7 7m0-7l7 7M15 2v4M9 2v4m-5.483 5c-.011.32-.017.654-.017 1 0 5.368 1.364 7.667 5.5 8.305M3.517 11C3.726 5.293 5.846 3.5 12 3.5c5.78 0 8.001 1.581 8.423 6.5M3.517 11H11"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m11 3l-7 7m0-7l7 7"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m11 3l-7 7m0-7l7 7"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m11-7l-7 7m0-7l7 7"
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

CalendarCross.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarCross.displayName = 'SvgCalendarCross';
export default createIcon(CalendarCross);
