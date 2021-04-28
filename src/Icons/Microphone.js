import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Microphone = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 6a3 3 0 10-6 0v6a3 3 0 106 0V9m3 3a6 6 0 01-6 6v3m-6-9a5.994 5.994 0 002.682 5M12 21h3m-3 0H9"
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
        d="M18.5 12c0 3.314-2.5 6-6.5 6m0 0c-4 0-6.5-2.686-6.5-6m6.5 6v3m0 0h3m-3 0H9m3-6c3.172 0 3.5-4 3.5-6s-.328-6-3.5-6-3.5 4-3.5 6 .328 6 3.5 6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M9 6a3 3 0 116 0v6a3 3 0 11-6 0V6z" fill={color} />
      <path
        d="M18 12a6 6 0 01-6 6m0 0a6 6 0 01-6-6m6 6v3m0 0h3m-3 0H9m3-6a3 3 0 01-3-3V6a3 3 0 116 0v6a3 3 0 01-3 3z"
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
        d="M18 12a6 6 0 01-6 6m0 0a6 6 0 01-6-6m6 6v3m0 0h3m-3 0H9m3-6a3 3 0 01-3-3V6a3 3 0 116 0v6a3 3 0 01-3 3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 6a3 3 0 116 0v6a3 3 0 11-6 0V6z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18 12a6 6 0 01-6 6m0 0a6 6 0 01-6-6m6 6v3m0 0h3m-3 0H9"
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

Microphone.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Microphone.displayName = 'SvgMicrophone';
export default createIcon(Microphone);
