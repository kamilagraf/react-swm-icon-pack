import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Gift1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 10h-7 8V7H4v3h4-3v10h14v-6m-7.134-7.15c.549-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3zm.196 0c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
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
        d="M18.5 9.885c.307-.017.518-.034.611-.052.445-.083.889-.666.889-1.333 0-.667-.444-1.25-.889-1.333C18.667 7.083 15.556 7 12 7c-3.556 0-6.667.083-7.111.167C4.444 7.25 4 7.833 4 8.5c0 .667.444 1.25.889 1.333.093.018.304.035.611.052m13 0c-1.158.063-3.69.115-6.5.115s-5.342-.052-6.5-.115m13 0s.5 1.726.5 4.615c0 2.889-.389 5.417-.778 5.778-.389.36-3.11.722-6.222.722-3.111 0-5.833-.361-6.222-.722C5.388 19.917 5 17.388 5 14.5c0-2.889.5-4.615.5-4.615m6.366-3.035c.549-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3zm.196 0c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M5 10h14v10H5V10zM4 7h16v3H4V7z" opacity={0.15} fill={color} />
      <path
        d="M19 10.08v10H5v-10m14 0H5m14 0h1v-3H4v3h1m7-3c-.833-1.833-3-5.5-5-3.5s2.5 3.334 5 3.5zm0 0c.833-1.833 3-5.5 5-3.5s-2.5 3.334-5 3.5z"
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
        d="M19 10.08v10H5v-10m14 0H5m14 0h1v-3H4v3h1m7-3c-.833-1.833-3-5.5-5-3.5s2.5 3.334 5 3.5zm0 0c.833-1.833 3-5.5 5-3.5s-2.5 3.334-5 3.5z"
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
        d="M11.866 6.85c.55-2.049 3.696-5.598 5.196-3 1.5 2.598-3.147 3.55-5.196 3z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.062 6.85c-.549-2.049-3.696-5.598-5.196-3-1.5 2.598 3.147 3.55 5.196 3z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 10h14v10H5V10zM4 7h16v3H4V7z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Gift1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Gift1.displayName = 'SvgGift1';
export default createIcon(Gift1);
