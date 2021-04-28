import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const MicrophoneDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 6a3 3 0 00-5.83-1M15 10.5V9m-9 3a5.994 5.994 0 002.682 5m4.818.811A6.01 6.01 0 0112 18v3m6-9a6.01 6.01 0 01-.189 1.5M12 21h3m-3 0H9M3 3l18 18"
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
        d="M3 3l18 18m-9-3c-4 0-6.5-2.686-6.5-6m6.5 6v3m0-3a7.9 7.9 0 002-.247M12 21h3m-3 0H9m.163-16C9.661 3.87 10.521 3 12 3c3.172 0 3.5 4 3.5 6 0 .555-.025 1.265-.13 2m3.13 1c0 .701-.112 1.374-.326 2"
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
        d="M15 10.5V6a3 3 0 00-5.83-1M12 18a6 6 0 01-6-6m6 6a6.01 6.01 0 001.5-.189M12 18v3m6-9a6.01 6.01 0 01-.189 1.5M12 21h3m-3 0H9M3 3l18 18"
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
        d="M15 10.5V6a3 3 0 00-5.83-1M12 18a6 6 0 01-6-6m6 6a6.01 6.01 0 001.5-.189M12 18v3m6-9a6.01 6.01 0 01-.189 1.5M12 21h3m-3 0H9M3 3l18 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 10.5V6a3 3 0 00-5.83-1M3 3l18 18" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 18a6 6 0 01-6-6m6 6a6.01 6.01 0 001.5-.189M12 18v3m6-9a6.01 6.01 0 01-.189 1.5M12 21h3m-3 0H9"
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

MicrophoneDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

MicrophoneDisabled.displayName = 'SvgMicrophoneDisabled';
export default createIcon(MicrophoneDisabled);
