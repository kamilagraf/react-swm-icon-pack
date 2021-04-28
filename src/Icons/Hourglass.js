import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Hourglass = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M5 20h14M5 4h14M7 6.894a2 2 0 00.336 1.11L9.26 10.89a2 2 0 010 2.218l-1.924 2.887A2 2 0 007 17.106V20M17 4v2.894a2 2 0 01-.336 1.11L14.74 10.89a2 2 0 000 2.218l1.924 2.887a2 2 0 01.336 1.11"
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
        d="M5 20s.75.125 2 .25M19 20s-.75.125-2 .25M5 4s.75-.125 2-.25M19 4s-.75-.125-2-.25m0 16.5c-1.25.125-3 .25-5 .25s-3.75-.125-5-.25m10 0v-3.144a2 2 0 00-.336-1.11L14.74 13.11a2 2 0 010-2.218l1.924-2.887A2 2 0 0017 6.894V3.75M7 20.25v-3.144a2 2 0 01.336-1.11L9.26 13.11a2 2 0 000-2.218L7.336 8.004A2 2 0 017 6.894V3.75m0 0c1.25-.125 3-.25 5-.25s3.75.125 5 .25"
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
        opacity={0.15}
        d="M7 6.894V4h10v2.894a2 2 0 01-.336 1.11L14.74 10.89a2 2 0 000 2.218l1.924 2.887a2 2 0 01.336 1.11V20H7v-2.894a2 2 0 01.336-1.11L9.26 13.11a2 2 0 000-2.218L7.336 8.004A2 2 0 017 6.894z"
        fill={color}
      />
      <path
        d="M5 20h14M5 4h14M7 4v2.894a2 2 0 00.336 1.11L9.26 10.89a2 2 0 010 2.218l-1.924 2.887A2 2 0 007 17.106V20M17 4v2.894a2 2 0 01-.336 1.11L14.74 10.89a2 2 0 000 2.218l1.924 2.887a2 2 0 01.336 1.11V20"
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
        d="M5 20h14M5 4h14M7 4v2.894a2 2 0 00.336 1.11L9.26 10.89a2 2 0 010 2.218l-1.924 2.887A2 2 0 007 17.106V20M17 4v2.894a2 2 0 01-.336 1.11L14.74 10.89a2 2 0 000 2.218l1.924 2.887a2 2 0 01.336 1.11V20"
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
        d="M7 4v2.894a2 2 0 00.336 1.11L9.26 10.89a2 2 0 010 2.218l-1.924 2.887A2 2 0 007 17.106V20M17 4v2.894a2 2 0 01-.336 1.11L14.74 10.89a2 2 0 000 2.218l1.924 2.887a2 2 0 01.336 1.11V20"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 20h14M5 4h14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Hourglass.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Hourglass.displayName = 'SvgHourglass';
export default createIcon(Hourglass);
