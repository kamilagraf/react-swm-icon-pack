import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Key = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8.499 20a4.501 4.501 0 010-9 4.502 4.502 0 013.742 7m-.55-5.691L14.002 10l7-7M18 6l2 2-1.5 1.5L17 11l-1-1-1-1"
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
        d="M11.691 12.309L21.002 3M18 6l2 2-3 3-2-2m-2 6.5A4.501 4.501 0 118.499 11 4.502 4.502 0 0113 15.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} fillRule="evenodd" clipRule="evenodd" d="M13 15.5A4.501 4.501 0 118.499 11 4.502 4.502 0 0113 15.5z" fill={color} />
      <path
        d="M11.691 12.309L21.002 3M18 6l2 2-3 3-2-2m-2 6.5A4.501 4.501 0 118.499 11 4.502 4.502 0 0113 15.5z"
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
        d="M11.691 12.309L21.002 3M18 6l2 2-3 3-2-2m-2 6.5A4.501 4.501 0 118.499 11 4.502 4.502 0 0113 15.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M18 6l2 2-3 3-2-2" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.691 12.309L21.002 3M13 15.5A4.501 4.501 0 118.499 11 4.502 4.502 0 0113 15.5z"
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

Key.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Key.displayName = 'SvgKey';
export default createIcon(Key);
