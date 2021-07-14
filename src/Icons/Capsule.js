import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Capsule = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535 3.536-3.535a5 5 0 00-7.072-7.071M8.43 8.57L9.5 7.5M8.429 8.571L13 13.142"
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
        d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535M8.429 8.571l3.535-3.535a5 5 0 017.071 7.07L15.5 15.643M8.429 8.571l7.07 7.071"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535-7.071-7.071z" fill={color} />
      <path
        d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535M8.429 8.571l3.535-3.535a5 5 0 017.072 7.07L15.5 15.643M8.429 8.571l7.071 7.071"
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
        d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535M8.429 8.571l3.535-3.535a5 5 0 017.072 7.07L15.5 15.643M8.429 8.571l7.071 7.071"
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
        d="M8.429 8.571l3.535-3.535a5 5 0 017.071 7.07L15.5 15.643"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.429 8.571l-3.536 3.536a5 5 0 107.071 7.07l3.536-3.535-7.071-7.071z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

Capsule.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Capsule.displayName = 'Capsule';
export default createIcon(Capsule);
