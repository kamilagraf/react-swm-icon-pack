import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Speaker0 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 16H5a2 2 0 01-2-2v-4a2 2 0 012-2h2l6-5v18l-3-2.5"
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
        d="M12 3C9 3 7.5 7.5 5.5 8S3 9.395 3 10.5v3c0 1.105.5 2 2.5 2.5S9 21 12 21c2 0 2-18 0-18z"
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
        d="M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z"
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
        d="M13 3L7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2l6 5V3z"
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

Speaker0.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Speaker0.displayName = 'SvgSpeaker0';
export default createIcon(Speaker0);
