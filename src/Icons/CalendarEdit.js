import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const CalendarEdit = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 11v8a2 2 0 002 2h3M4 11V7a2 2 0 012-2m-2 6h5m11-1V7a2 2 0 00-2-2h-3m0-2v2m0 0v2M9 3v2m0 0v2m0-2h3m6.588 11.294L20 14.882 18.118 13l-1.412 1.412m1.882 1.882L13.882 21H12v-1.882l4.706-4.706m1.882 1.882l-1.882-1.882"
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
        d="M16.5 14.5l2 2M12 19l6-6 2 2-6 6h-2v-2zM15 2v4M9 2v4m-5.483 5c-.011.32-.017.654-.017 1 0 4.91 1.14 7.252 4.5 8.104M3.517 11C3.726 5.293 5.846 3.5 12 3.5c5.78 0 8.001 1.581 8.423 6.5M3.517 11H12"
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
        d="M4 11v8a2 2 0 002 2h3M4 11V7a2 2 0 012-2m-2 6h5m11-1V7a2 2 0 00-2-2h-3m0-2v2m0 0v2M9 3v2m0 0v2m0-2h3m6.588 11.294L20 14.882 18.118 13l-1.412 1.412m1.882 1.882L13.882 21H12v-1.882l4.706-4.706m1.882 1.882l-1.882-1.882"
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
        d="M9 5H6a2 2 0 00-2 2v4m5-6h6M9 5V3m0 2v2m6-2h3a2 2 0 012 2v3m-5-5V3m0 2v2M4 11v8a2 2 0 002 2h3M4 11h5m9.588 5.294L20 14.882 18.118 13l-1.412 1.412m1.882 1.882L13.882 21H12v-1.882l4.706-4.706m1.882 1.882l-1.882-1.882"
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
        d="M20 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h3m7.5-6.5l2 2M12 19l6-6 2 2-6 6h-2v-2z"
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

CalendarEdit.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CalendarEdit.displayName = 'SvgCalendarEdit';
export default createIcon(CalendarEdit);
