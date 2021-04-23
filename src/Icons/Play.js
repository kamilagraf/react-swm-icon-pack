import * as React from 'react';
import PropTypes from 'prop-types';

const Play = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 18V6l10 6-6.667 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M7.5 6S7 8 7 12s.5 6 .5 6 2-.5 5.5-2.5 4.5-3.5 4.5-3.5-1-1.5-4.5-3.5S7.5 6 7.5 6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M8 6v12l10-6L8 6z" fill={color} />
      <path d="M8 6v12l10-6L8 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8 6v12l10-6L8 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M8 6l10 6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6v12l10-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Play.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Play.displayName = 'SvgPlay';
export default Play;
