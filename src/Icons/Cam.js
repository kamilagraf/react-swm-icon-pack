import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cam = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M16 15l5 2V7l-2.5 1M3 13V6.5a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V17"
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
        d="M16.877 15c.077-.9.123-1.927.123-3s-.046-2.1-.123-3m0 6c-.145 1.711-.4 2.967-.655 3.222-.389.39-3.11.778-6.222.778-3.111 0-5.833-.389-6.222-.778C3.388 17.833 3 15.112 3 12c0-3.111.389-5.833.778-6.222C4.167 5.388 6.888 5 10 5c3.111 0 5.833.389 6.222.778.255.255.51 1.51.655 3.222m0 6L21 17s.5-2 .5-5-.5-5-.5-5l-4.123 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M3 6.5a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1v-11z" fill={color} />
      <path
        d="M16 9l5-2v10l-5-2M4 18.5h11a1 1 0 001-1v-11a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1z"
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
        d="M16 9l5-2v10l-5-2M4 18.5h11a1 1 0 001-1v-11a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M16 9l5-2v10l-5-2" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 6.5a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1v-11z"
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

Cam.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cam.displayName = 'SvgCam';
export default createIcon(Cam);
