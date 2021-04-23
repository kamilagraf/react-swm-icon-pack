import * as React from 'react';
import PropTypes from 'prop-types';

const ChartVertical = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 17v-3m4 3v-2m0-8v5m4 5v-6m4 1v8H4V4h16v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M8 16v-2m4 2V8m4 8v-4M3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5-2 8.5-8.5 8.5-8.5-2-8.5-8.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 4H4v16h16V4z" fill={color} />
      <path d="M8 17v-3m4 3V7m4 10v-6M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8 17v-3m4 3V7m4 10v-6M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M8 17v-3m4 3V7m4 10v-6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ChartVertical.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChartVertical.displayName = 'SvgChartVertical';
export default ChartVertical;
