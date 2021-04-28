import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Umbrella2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 21v-6.5M12 3v1m0 0a8 8 0 018 8l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1a8 8 0 012.343-5.657M12 4c-.68 0-1.352.087-2 .254"
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
        d="M12 12v9m0-9l-1.777-.888a.5.5 0 00-.447 0l-1.553.776a.5.5 0 01-.447 0l-1.553-.776a.5.5 0 00-.447 0l-1.053.526c-.332.166-.72-.076-.682-.446A8 8 0 0112 4m0 8l1.776-.888a.5.5 0 01.447 0l1.553.776a.5.5 0 00.447 0l1.553-.776a.5.5 0 01.447 0l1.053.526c.333.166.72-.076.683-.446A8 8 0 0011.999 4m0-1v1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M17.657 6.343A8 8 0 0120 12l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1a8 8 0 0113.657-5.657z" fill={color} />
      <path
        d="M12 12v9m0-9l-2-1-2 1-2-1-2 1a8 8 0 018-8m0 8l2-1 2 1 2-1 2 1a8 8 0 00-8-8m0-1v1"
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
        d="M12 12v9m0-9l-2-1-2 1-2-1-2 1a8 8 0 018-8m0 8l2-1 2 1 2-1 2 1a8 8 0 00-8-8m0-1v1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 12v9m0-18v1" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.657 6.343A8 8 0 0120 12l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1a8 8 0 0113.657-5.657z"
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

Umbrella2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Umbrella2.displayName = 'SvgUmbrella2';
export default createIcon(Umbrella2);
