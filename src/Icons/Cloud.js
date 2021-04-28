import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cloud = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5a5 5 0 015 5v1M7 11v-1c0-1.126.372-2.165 1-3m-1 4a4 4 0 000 8m0-8c1.014 0 1.94.378 2.646 1M17 19a4 4 0 002.646-7"
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
        d="M7 11v-1a5 5 0 0110 0v1a4 4 0 010 8M7 11a4 4 0 000 8m0-8c1.014 0 1.94.378 2.646 1"
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
        d="M7 11v-1a5 5 0 0110 0v1a4 4 0 010 8M7 11a4 4 0 000 8m0-8c1.014 0 1.94.378 2.646 1"
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
        d="M7 11v-1a5 5 0 0110 0v1a4 4 0 010 8M7 11a4 4 0 000 8m0-8c1.014 0 1.94.378 2.646 1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M7 11v-1a5 5 0 0110 0v1a4 4 0 010 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 19a4 4 0 112.646-7" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Cloud.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cloud.displayName = 'SvgCloud';
export default createIcon(Cloud);
