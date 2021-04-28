import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cart4 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 19a2 2 0 102-2H7.367a1 1 0 01-.99-.859M18 14H6.071L4.5 3H2m7 2h12l-2 6m-8 8a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M17 17a2 2 0 100 4 2 2 0 000-4zm0 0H8.235a2 2 0 01-1.98-1.717L6.07 14M2 3h.765a2 2 0 011.98 1.717l.04.283m0 0l1.286 9M4.786 5h13.44a2 2 0 011.896 2.632l-1.666 5A2 2 0 0116.558 14H6.071M11 19a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M18 14l3-9H4.786l1.285 9H18z" fill={color} />
      <path
        d="M17 17a2 2 0 100 4 2 2 0 000-4zm0 0H7.367a1 1 0 01-.99-.859L4.5 3H2m3 2h16l-3 9H6.5m4.5 5a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M17 17a2 2 0 100 4 2 2 0 000-4zm0 0H7.367a1 1 0 01-.99-.859L6.071 14M2 3h2.5l.286 2m0 0H21l-3 9H6.071M4.786 5l1.285 9M11 19a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M4.786 5H21l-3 9H6.07" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 17a2 2 0 100 4 2 2 0 000-4zm0 0H7.367a1 1 0 01-.99-.859L6.071 14 4.786 5 4.5 3H2m9 16a2 2 0 11-4 0 2 2 0 014 0z"
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

Cart4.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cart4.displayName = 'SvgCart4';
export default createIcon(Cart4);
