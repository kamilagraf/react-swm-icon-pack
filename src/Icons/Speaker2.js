import * as React from 'react';
import PropTypes from 'prop-types';

const Speaker2 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 16H5a2 2 0 01-2-2v-4a2 2 0 012-2h2l6-5v18l-3-2.5M16 9c.5.5 1 1.5 1 3s-.5 2.5-1 3m3-9c1.5 1.5 2 4 2 6m-2 6c.794-.794 1.308-1.868 1.616-3"
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
        d="M16 9c.5.5 1 1.5 1 3s-.5 2.5-1 3m3-9c1.5 1.5 2 4 2 6s-.5 4.5-2 6M12 3c2 0 2 18 0 18-3 0-4.5-4.5-6.5-5S3 14.605 3 13.5v-3c0-1.105.5-2 2.5-2.5S9 3 12 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z" fill={color} />
      <path
        d="M16 9c.5.5 1 1.5 1 3s-.5 2.5-1 3m3-9c1.5 1.5 2 4 2 6s-.5 4.5-2 6M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z"
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
        d="M16 9c.5.5 1 1.5 1 3s-.5 2.5-1 3m3-9c1.5 1.5 2 4 2 6s-.5 4.5-2 6M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z"
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
        d="M16 9c.5.5 1 1.5 1 3s-.5 2.5-1 3m3-9c1.5 1.5 2 4 2 6s-.5 4.5-2 6"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z"
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

Speaker2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Speaker2.displayName = 'SvgSpeaker2';
export default Speaker2;
