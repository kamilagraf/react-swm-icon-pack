import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cart3 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 7v11a2 2 0 002 2h12a2 2 0 002-2M4 7l2-4h12l2 4M4 7h2m14 0v7m0-7H10m5 4a3 3 0 11-6 0"
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
        d="M4 7h16M4 7l1.447-2.894A2 2 0 017.237 3h9.527a2 2 0 011.789 1.106L20 7M4 7v6c0 6.367 1.128 7.5 8 7.5s8-1.133 8-7.5V7m-5 4a3 3 0 11-6 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 7h16v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" fill={color} />
      <path
        d="M4 7h16M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7M4 7l2-4h12l2 4m-5 4a3 3 0 11-6 0"
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
        d="M4 7h16M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7M4 7l2-4h12l2 4m-5 4a3 3 0 11-6 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 11a3 3 0 11-6 0" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 7h16M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7M4 7l2-4h12l2 4"
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

Cart3.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cart3.displayName = 'SvgCart3';
export default createIcon(Cart3);
