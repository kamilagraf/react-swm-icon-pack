import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Globe1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3a9 9 0 009 9m0 0s4-3 4-9m-4 9s-4-3-4-9 4-9 4-9m0 0s2.222 1.667 3.354 5M12 3a8.978 8.978 0 00-6.708 3"
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9s4-3 4-9-4-9-4-9m0 18s-4-3-4-9 4-9 4-9m-9 9a9 9 0 019-9"
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9s4-3 4-9-4-9-4-9m0 18s-4-3-4-9 4-9 4-9m-9 9a9 9 0 019-9"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9s4-3 4-9-4-9-4-9m0 18s-4-3-4-9 4-9 4-9m-9 9a9 9 0 019-9"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M16 12c0-6-4-9-4-9s-4 3-4 9 4 9 4 9 4-3 4-9z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12a9 9 0 11-18 0m18 0a9 9 0 10-18 0m18 0H3"
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

Globe1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Globe1.displayName = 'SvgGlobe1';
export default createIcon(Globe1);
