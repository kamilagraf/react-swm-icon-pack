import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cast = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 15.05a5 5 0 013.9 3.9M3 11a9 9 0 015.37 2.58m2.58 5.37a8.998 8.998 0 00-.44-1.95M3 18.95h.01M3 8V5h18v3m-7 11h7v-7"
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
        d="M3 15.05a5 5 0 013.9 3.9M3 11a9 9 0 017.95 7.95m-7.95 0h.01M3.29 8c.19-1.189.45-2.02.71-2.222C4.5 5.388 8 5 12 5s7.5.389 8 .778 1 3.11 1 6.222c0 3.111-.5 5.833-1 6.222-.414.322-2.888.645-6 .746"
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
        d="M3 15.05a5 5 0 013.9 3.9M3 11a9 9 0 017.95 7.95m-7.95 0h.01M3 8V5h18v14h-7"
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
        d="M3 15.05a5 5 0 013.9 3.9M3 11a9 9 0 017.95 7.95m-7.95 0h.01M3 8V5h18v14h-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M3 15.05a5 5 0 013.9 3.9M3 11a9 9 0 017.95 7.95m-7.95 0h.01"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 8V5h18v14h-7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Cast.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cast.displayName = 'SvgCast';
export default createIcon(Cast);
