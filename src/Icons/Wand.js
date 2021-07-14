import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Wand = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 20l-8-8M9 5V3m0 12v-2M5 9H3m12 0h-2M6.5 6.5L4.379 4.379M6.5 11.5l-2.121 2.121M13.62 4.38L11.5 6.5"
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
        d="M20 20l-8-8M9 5V3m0 12v-2M5 9H3m12 0h-2M6.5 6.5L4.379 4.379M6.5 11.5l-2.121 2.121M13.62 4.38L11.5 6.5"
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
        d="M20 20l-8-8M9 5V3m0 12v-2M5 9H3m12 0h-2M6.5 6.5L4.379 4.379M6.5 11.5l-2.121 2.121M13.62 4.38L11.5 6.5"
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
        d="M20 20l-8-8M9 5V3m0 12v-2M5 9H3m12 0h-2M6.5 6.5L4.379 4.379M6.5 11.5l-2.121 2.121M13.62 4.38L11.5 6.5"
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
        d="M9 5V3m0 12v-2M5 9H3m12 0h-2M6.5 6.5L4.379 4.379M6.5 11.5l-2.121 2.121M13.62 4.38L11.5 6.5"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 20l-8-8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Wand.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Wand.displayName = 'Wand';
export default createIcon(Wand);
