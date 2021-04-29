import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Map = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 3l6 2v16M15 3v16m0-16l-3 1m3 15l-6 2V5L3 3v16l3 1m9-1l3 1"
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
        d="M9 5L5.632 3.877A2 2 0 003 5.775v11.783a2 2 0 001.368 1.898L9 21M9 5l6-2M9 5v16m6-18l4.633 1.544A2 2 0 0121 6.442v11.783a2 2 0 01-2.633 1.897L15 19m0-16v16m0 0l-6 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M3 3l6 2v16l-6-2V3zM21 5l-6-2v16l6 2V5z" opacity={0.15} fill={color} />
      <path
        d="M9 5L3 3v16l6 2M9 5l6-2M9 5v16m6-18l6 2v16l-6-2m0-16v16m0 0l-3 1-3 1"
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
        d="M9 5L3 3v16l6 2M9 5l6-2M9 5v16m6-18l6 2v16l-6-2m0-16v16m0 0l-6 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 5v16m6-18v16" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3l6 2 6-2 6 2v16l-6-2-6 2-6-2V3z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Map.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Map.displayName = 'SvgMap';
export default createIcon(Map);
