import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CalendarUser = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6 5a2 2 0 00-2 2v12a2 2 0 002 2h3M20 9V7a2 2 0 00-2-2h-3m0-2v4M9 3v4m-5 4h5m11 10v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M9 5h3m6 8a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M15 2v1.695m0 0V6m0-2.305c-.872-.134-1.868-.195-3-.195s-2.128.06-3 .195m6 0C18.264 4.2 19.801 5.736 20.305 9M9 2v1.695m0 0V6m0-2.305C5.13 4.292 3.687 6.343 3.517 11m0 0c-.011.32-.017.654-.017 1 0 4.91 1.14 7.252 4.5 8.104M3.517 11H10.5m7.5 2a2 2 0 11-4 0 2 2 0 014 0zm-4.75 8h5.5c.69 0 1.25-.56 1.25-1.25 0-2.04-3-2-4-2s-4-.04-4 2c0 .69.56 1.25 1.25 1.25z"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m11 10v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m6-8a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m6-18v4M9 3v4m-5 4h5m11 10v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m6-8a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m11 0v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m6-8a2 2 0 11-4 0 2 2 0 014 0z"
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

CalendarUser.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarUser.displayName = 'SvgCalendarUser';
export default createIcon(CalendarUser);
