import * as React from 'react';
import PropTypes from 'prop-types';

const User2 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 15c1.657 0 3 2 3 3.5v.208m-12 0A8.967 8.967 0 0012 21a8.967 8.967 0 006-2.292m-12 0A8.977 8.977 0 013 12c0-.687.077-1.357.223-2M6 18.708V18.5C6 17 7.343 15 9 15h2m7 3.708A9 9 0 106 5.291M15 9a3 3 0 11-6 0 3 3 0 016 0z"
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
        d="M18 18.702C18 15.671 14.5 15 12 15s-6 .67-6 3.702M15 9a3 3 0 11-6 0 3 3 0 016 0zm6 3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M12.05 21h-.1l.05-.05.05.05z" opacity={0.15} fill={color} />
      <path d="M17.994 18.714A3.5 3.5 0 0014.5 15h-5a3.5 3.5 0 00-3.494 3.714 9 9 0 1111.987 0zM12 12a3 3 0 100-6 3 3 0 000 6z" />
      <path
        d="M6 18.708A8.967 8.967 0 0012 21a8.967 8.967 0 006-2.292m-12 0a9 9 0 1112 0m-12 0V18.5C6 17 7.343 15 9 15h6c1.657 0 3 2 3 3.5v.208M15 9a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M6 18.708A8.967 8.967 0 0012 21a8.967 8.967 0 006-2.292m-12 0a9 9 0 1112 0m-12 0V18.5C6 17 7.343 15 9 15h6c1.657 0 3 2 3 3.5v.208M15 9a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M18 18.702A3.702 3.702 0 0014.298 15H9.702A3.702 3.702 0 006 18.702M15 9a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

User2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

User2.displayName = 'SvgUser2';
export default User2;
