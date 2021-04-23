import * as React from 'react';
import PropTypes from 'prop-types';

const EmoteNormal = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path d="M3 12a9 9 0 102-5.657M9 9h.01M15 9h.01M8 15h8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M9 9h.01M15 9h.01M8 15h8m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 21a9 9 0 100-18 9 9 0 000 18z" fill={color} />
      <path
        d="M9 9h.01M15 9h.01M8 15h8m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M9 9h.01M15 9h.01M8 15h8m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 9h.01M15 9h.01M8 15h8" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

EmoteNormal.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

EmoteNormal.displayName = 'SvgEmoteNormal';
export default EmoteNormal;
