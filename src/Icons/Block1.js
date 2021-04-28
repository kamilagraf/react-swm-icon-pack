import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Block1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18.364 5.636A8.972 8.972 0 0012 3a8.972 8.972 0 00-6.364 2.636m12.728 0A9.004 9.004 0 0120.5 9.035m-2.136-3.399L12 12m0 0l-6.364 6.364M12 12l6.364 6.364m-12.728 0A8.972 8.972 0 0012 21a8.972 8.972 0 006.364-2.636m-12.728 0A8.972 8.972 0 013 12a8.972 8.972 0 012.636-6.364m14.732 9.683a9.011 9.011 0 01-2.004 3.045M5.636 5.636L10 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
      <path d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636"
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

Block1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Block1.displayName = 'SvgBlock1';
export default createIcon(Block1);
