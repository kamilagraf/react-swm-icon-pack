import * as React from 'react';
import PropTypes from 'prop-types';

const MessageSquareDots = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 16H4V4h16v2M8 10h.01M12 10h.01M16 10h.01M7 18.5V21l5-5h8v-6"
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
        d="M8 10h.01M12 10h.01M16 10h.01M3 10c0-5.353 2.118-7 9-7s9 1.647 9 7-2.118 7-9 7c-.34 0-.67-.004-.988-.012L7 21v-4.506C4.033 15.669 3 13.738 3 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 4H4v12h3v5l5-5h8V4z" fill={color} />
      <path
        d="M8 10h.01M12 10h.01M16 10h.01M4 4h16v12h-8l-5 5v-5H4V4z"
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
        d="M8 10h.01M12 10h.01M16 10h.01M4 4h16v12h-8l-5 5v-5H4V4z"
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
        d="M7 16v5l5-5m-4-6h.01M12 10h.01M16 10h.01"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 16H4V4h16v12h-8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

MessageSquareDots.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

MessageSquareDots.displayName = 'SvgMessageSquareDots';
export default MessageSquareDots;
