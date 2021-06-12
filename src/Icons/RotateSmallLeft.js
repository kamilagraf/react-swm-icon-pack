import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const RotateSmallLeft = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 7v3m0 0h3m-3 0c1.083-.767 2.078-1.769 3.442-1.961a4 4 0 014.209 2.326M8.227 13.33a4 4 0 007.673-.441"
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
        d="M8 7v3m0 0h3m-3 0c1.083-.767 2.078-1.769 3.442-1.961a4 4 0 11-3.215 5.29"
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
        d="M8 7v3m0 0h3m-3 0c1.083-.767 2.078-1.769 3.442-1.961a4 4 0 11-3.215 5.29"
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
        d="M8 7v3m0 0h3m-3 0c1.083-.767 2.078-1.769 3.442-1.961a4 4 0 11-3.215 5.29"
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
        d="M8 10c1.083-.767 2.078-1.769 3.442-1.961a4 4 0 11-3.215 5.29"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7v3h3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

RotateSmallLeft.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RotateSmallLeft.displayName = 'SvgRotateSmallLeft';
export default createIcon(RotateSmallLeft);
