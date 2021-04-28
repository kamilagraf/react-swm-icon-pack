import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Shirt = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 4h-3a3 3 0 11-6 0H6L3 7l.5 5L6 10.5M21 7l-.5 5-2.5-1.5V20H6v-6"
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
        d="M3 7l3-3h3a3 3 0 006 0h3l3 3-.422 4.215a.5.5 0 01-.754.38L18 10.5V18a2 2 0 01-2 2H8a2 2 0 01-2-2v-7.5l-1.824 1.094a.5.5 0 01-.754-.379L3 7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 7l3-3h3a3 3 0 006 0h3l3 3-.5 5-2.5-1.5V20H6v-9.5L3.5 12 3 7z" fill={color} />
      <path
        d="M3 7l3-3h3a3 3 0 006 0h3l3 3-.5 5-2.5-1.5V20H6v-9.5L3.5 12 3 7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M3 7l3-3h3a3 3 0 006 0h3l3 3-.5 5-2.5-1.5V20H6v-9.5L3.5 12 3 7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 4a3 3 0 006 0" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 4H6L3 7l.5 5L6 10.5V20h12v-9.5l2.5 1.5.5-5-3-3h-3"
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

Shirt.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Shirt.displayName = 'SvgShirt';
export default createIcon(Shirt);
