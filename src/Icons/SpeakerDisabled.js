import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const SpeakerDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 16H5a2 2 0 01-2-2v-4a2 2 0 011-1.732m9 .232V3l-3 2.5m3 12V21l-3-2.5M3 3l18 18"
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
        d="M3 3l18 18M9 4.608C9.846 3.715 10.804 3 12 3c.774 0 1.248 2.695 1.423 6M5 8.143c-1.585.518-2 1.35-2 2.357v3c0 1.105.5 2 2.5 2.5S9 21 12 21c.61 0 1.034-1.674 1.272-4"
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
        d="M13 8.5V3l-3 2.5m3 12V21l-6-5H5a2 2 0 01-2-2v-4a2 2 0 011-1.732M3 3l18 18"
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
        d="M13 8.5V3l-3 2.5m3 12V21l-6-5H5a2 2 0 01-2-2v-4a2 2 0 011-1.732M3 3l18 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M3 3l18 18" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13 8.5V3l-3 2.5m3 12V21l-6-5H5a2 2 0 01-2-2v-4a2 2 0 011-1.732"
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

SpeakerDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

SpeakerDisabled.displayName = 'SvgSpeakerDisabled';
export default createIcon(SpeakerDisabled);
