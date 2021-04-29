import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CalendarWarning = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 5a2 2 0 00-2 2v12a2 2 0 002 2h9m5-13V7a2 2 0 00-2-2h-3m0-2v4M9 3v4m-5 4h11m5 1v6.5m0 2.5v.01M9 5h3"
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
        d="M20 12v6.5m0 2.5v.01M15 2v4M9 2v4m-5.483 5c-.011.32-.017.654-.017 1 0 6.5 2 8.5 8.5 8.5 1.59 0 2.912-.12 4-.396M3.517 11C3.726 5.293 5.846 3.5 12 3.5c4.91 0 7.252 1.14 8.104 4.5M3.517 11H16"
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
        d="M20 8V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h9m0-18v4M9 3v4m-5 4h11m5 1v6.5m0 2.5v.01"
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
        d="M20 8V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h9m0-18v4M9 3v4m-5 4h11m5 1v6.5m0 2.5v.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M4 11h11" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 8V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h9m5-9v6.5m0 2.5v.01"
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

CalendarWarning.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarWarning.displayName = 'SvgCalendarWarning';
export default createIcon(CalendarWarning);
