import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Like = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 20H4V10h4l5.196-6.062a2 2 0 012.003-.638l.048.012a2 2 0 011.179 3.05L14 10h4.56a2 2 0 011.962 2.392l-1.2 6A2 2 0 0117.36 20M8 20v-6m0 6h4.68"
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
        d="M8 10H4v10h4m0-10v10m0-10l5.196-6.062a2 2 0 012.003-.638l.048.012a2 2 0 011.179 3.05L14 10h4.56a2 2 0 011.962 2.392l-1.2 6A2 2 0 0117.36 20H8"
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
        d="M8 10v10h9.36a2 2 0 001.962-1.608l1.2-6A2 2 0 0018.56 10H14l2.426-3.639a2 2 0 00-1.18-3.05L15.2 3.3a2 2 0 00-2.003.638L8 10z"
        fill={color}
      />
      <path
        d="M8 10H4v10h4m0-10v10m0-10l5.196-6.062a2 2 0 012.003-.638l.048.012a2 2 0 011.179 3.05L14 10h4.56a2 2 0 011.962 2.392l-1.2 6A2 2 0 0117.36 20H8"
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
        d="M8 10H4v10h4m0-10v10m0-10l5.196-6.062a2 2 0 012.003-.638l.048.012a2 2 0 011.179 3.05L14 10h4.56a2 2 0 011.962 2.392l-1.2 6A2 2 0 0117.36 20H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M8 10v10" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.36 20H4V10h4l5.196-6.062a2 2 0 012.003-.638l.048.012a2 2 0 011.179 3.05L14 10h4.56a2 2 0 011.962 2.392l-1.2 6A2 2 0 0117.36 20z"
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

Like.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Like.displayName = 'SvgLike';
export default createIcon(Like);
