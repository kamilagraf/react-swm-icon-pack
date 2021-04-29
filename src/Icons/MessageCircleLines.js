import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const MessageCircleLines = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15.3 19.1a8.379 8.379 0 01-3.8.9 8.5 8.5 0 01-7.6-4.7 8.38 8.38 0 01-.9-3.8V11a8.48 8.48 0 018-8m4.3.9a8.5 8.5 0 014.7 7.6 8.379 8.379 0 01-.9 3.8L21 21l-3-1M8 9.5h7m-7 4h5"
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
        d="M8 9.5h7m-7 4h5m-10-2a8.38 8.38 0 00.9 3.8 8.5 8.5 0 007.6 4.7 8.379 8.379 0 003.424-.721 1.07 1.07 0 01.771-.047l3.408 1.136a1 1 0 001.265-1.265l-1.136-3.408a1.07 1.07 0 01.047-.771A8.379 8.379 0 0020 11.5a8.5 8.5 0 00-4.7-7.6 8.38 8.38 0 00-3.8-.9H11a8.48 8.48 0 00-8 8v.5z"
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
        d="M3 11.5a8.38 8.38 0 00.9 3.8 8.5 8.5 0 007.6 4.7 8.379 8.379 0 003.8-.9L21 21l-1.9-5.7a8.379 8.379 0 00.9-3.8 8.5 8.5 0 00-4.7-7.6 8.38 8.38 0 00-3.8-.9H11a8.48 8.48 0 00-8 8v.5z"
        fill={color}
      />
      <path
        d="M8 9.5h7m-7 4h5m-10-2a8.38 8.38 0 00.9 3.8 8.5 8.5 0 007.6 4.7 8.379 8.379 0 003.8-.9L21 21l-1.9-5.7a8.379 8.379 0 00.9-3.8 8.5 8.5 0 00-4.7-7.6 8.38 8.38 0 00-3.8-.9H11a8.48 8.48 0 00-8 8v.5z"
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
        d="M8 9.5h7m-7 4h5m-10-2a8.38 8.38 0 00.9 3.8 8.5 8.5 0 007.6 4.7 8.379 8.379 0 003.8-.9L21 21l-1.9-5.7a8.379 8.379 0 00.9-3.8 8.5 8.5 0 00-4.7-7.6 8.38 8.38 0 00-3.8-.9H11a8.48 8.48 0 00-8 8v.5z"
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
        d="M15.3 19.1L21 21l-1.9-5.7M8 9.5h7m-7 4h5"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3 19.1a8.379 8.379 0 01-3.8.9 8.5 8.5 0 01-7.6-4.7 8.38 8.38 0 01-.9-3.8V11a8.48 8.48 0 018-8h.5a8.38 8.38 0 013.8.9 8.5 8.5 0 014.7 7.6 8.379 8.379 0 01-.9 3.8"
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

MessageCircleLines.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

MessageCircleLines.displayName = 'SvgMessageCircleLines';
export default createIcon(MessageCircleLines);
