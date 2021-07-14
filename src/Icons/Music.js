import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Music = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6.5 15A2.5 2.5 0 109 17.5V6l11-3v3m0 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0V10"
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
        d="M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0s-.5-4-.5-6.5S9 6 9 6s2-1 5.5-2S20 3 20 3s-.5 3.5-.5 6 .5 7.5.5 7.5m0 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 16.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" opacity={0.15} fill={color} />
      <path
        d="M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0V6l11-3v13.5m0 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
        d="M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0V6l11-3v13.5m0 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 17.5V6l11-3v13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 16.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        stroke={secondaryColor}
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

Music.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Music.displayName = 'Music';
export default createIcon(Music);
