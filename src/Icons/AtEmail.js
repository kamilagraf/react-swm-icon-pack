import * as React from 'react';
import PropTypes from 'prop-types';

const AtEmail = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 005.143 0V12a8.983 8.983 0 00-3.343-7M12 3a9 9 0 105.143 16.387"
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
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 005.143 0V12a9 9 0 10-3.857 7.387"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M8.143 12a3.857 3.857 0 107.714 0 3.857 3.857 0 00-7.714 0z" fill={color} />
      <path
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 005.143 0V12a9 9 0 10-3.857 7.387"
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
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 005.143 0V12a9 9 0 10-3.857 7.387"
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
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 002.572 2.571"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.429 15.857A2.57 2.57 0 0021 13.286V12a9 9 0 10-3.857 7.387"
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

AtEmail.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

AtEmail.displayName = 'SvgAtEmail';
export default AtEmail;
