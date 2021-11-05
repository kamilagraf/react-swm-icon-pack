import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Basket = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M5 20h14l2-10H3l1 5M3 10l6-6M18 7l-3-3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M21 10l-6-6M3 10l6-6M3 10h18l-1.357 6.785A4 4 0 0115.721 20H8.279a4 4 0 01-3.922-3.215L3 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 10h18l-2 10H5L3 10z" fill={color} />
      <path d="M21 10H3l2 10h14l2-10zM3 10l6-6M21 10l-6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M21 10H3l2 10h14l2-10zM3 10l6-6M21 10l-6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    default:
      return <Outline />;
  }
};

Basket.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Basket.displayName = 'Basket';
export default createIcon(Basket);
