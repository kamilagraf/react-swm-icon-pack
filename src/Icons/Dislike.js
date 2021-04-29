import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Dislike = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 4H4v10h4l5.196 6.061a2 2 0 002.003.64l.048-.013a2 2 0 001.179-3.05L14 14h4.56a2 2 0 001.962-2.392l-1.2-6A2 2 0 0017.36 4M8 4v6m0-6h4.68"
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
        d="M8 14H4V4h4m0 10V4m0 10l5.196 6.061a2 2 0 002.003.64l.048-.013a2 2 0 001.179-3.05L14 14h4.56a2 2 0 001.962-2.392l-1.2-6A2 2 0 0017.36 4H8"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14V4h9.36a2 2 0 011.962 1.608l1.2 6A2 2 0 0118.56 14H14l2.426 3.639a2 2 0 01-1.18 3.05l-.047.011a2 2 0 01-2.003-.639L8 14z"
        fill={color}
      />
      <path
        d="M8 14H4V4h4m0 10V4m0 10l5.196 6.061a2 2 0 002.003.64l.048-.013a2 2 0 001.179-3.05L14 14h4.56a2 2 0 001.962-2.392l-1.2-6A2 2 0 0017.36 4H8"
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
        d="M8 14H4V4h4m0 10V4m0 10l5.196 6.061a2 2 0 002.003.64l.048-.013a2 2 0 001.179-3.05L14 14h4.56a2 2 0 001.962-2.392l-1.2-6A2 2 0 0017.36 4H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M8 14V4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.36 4H4v10h4l5.196 6.061a2 2 0 002.003.64l.048-.013a2 2 0 001.179-3.05L14 14h4.56a2 2 0 001.962-2.392l-1.2-6A2 2 0 0017.36 4z"
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

Dislike.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Dislike.displayName = 'SvgDislike';
export default createIcon(Dislike);
