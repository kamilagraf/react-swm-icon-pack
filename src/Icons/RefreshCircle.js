import * as React from 'react';
import PropTypes from 'prop-types';

const RefreshCircle = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 7.5V10h3m7 6.5V14h-3m2-4c-.417-.67-1.125-1.223-2.018-1.578a6.313 6.313 0 00-2.932-.389c-1.01.102-1.948.438-2.67.956L7 9.879M8 14c.417.67 1.125 1.223 2.018 1.578a6.312 6.312 0 002.932.389c1.01-.102 1.948-.438 2.67-.956l1.38-.89m-5.95 6.83A9 9 0 106.343 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={strokeWidth}
        d="M7 8v2.4h2.5M17 16v-2.4h-2.5m1.667-3.2c-.425-.803-1.146-1.468-2.056-1.893a5.542 5.542 0 00-2.987-.467c-1.029.122-1.983.525-2.718 1.146L7 10.255m.833 3.345c.425.803 1.146 1.468 2.056 1.893.91.426 1.958.59 2.987.467 1.029-.122 1.983-.525 2.718-1.146L17 13.745"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path fill={color} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".15" />
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={strokeWidth}
        d="M7 8v2.4h2.5M17 16v-2.4h-2.5m1.667-3.2c-.425-.803-1.146-1.468-2.056-1.893a5.542 5.542 0 00-2.987-.467c-1.029.122-1.983.525-2.718 1.146L7 10.255m.833 3.345c.425.803 1.146 1.468 2.056 1.893.91.426 1.958.59 2.987.467 1.029-.122 1.983-.525 2.718-1.146L17 13.745"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path stroke={color} strokeWidth={strokeWidth} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={strokeWidth}
        d="M7 8v2.4h2.5M17 16v-2.4h-2.5m1.667-3.2c-.425-.803-1.146-1.468-2.056-1.893a5.542 5.542 0 00-2.987-.467c-1.029.122-1.983.525-2.718 1.146L7 10.255m.833 3.345c.425.803 1.146 1.468 2.056 1.893.91.426 1.958.59 2.987.467 1.029-.122 1.983-.525 2.718-1.146L17 13.745"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M7 7.5V10h3m7 6.5V14h-3m2-4c-.417-.67-1.125-1.223-2.018-1.578a6.313 6.313 0 00-2.932-.389c-1.01.102-1.948.438-2.67.956L7 9.879M8 14c.417.67 1.125 1.223 2.018 1.578a6.312 6.312 0 002.932.389c1.01-.102 1.948-.438 2.67-.956l1.38-.89"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

RefreshCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RefreshCircle.displayName = 'SvgRefreshCircle';
export default RefreshCircle;
