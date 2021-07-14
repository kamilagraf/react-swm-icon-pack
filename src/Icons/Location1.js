import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Location1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 21c-4.418-2-8-5.582-8-10a8 8 0 1116 0c0 2.961-1.609 5.547-4 7.532M9 11a3 3 0 103-3"
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
        d="M20 11c0 4.143-3.15 7.55-7.184 9.608a1.796 1.796 0 01-1.632 0C7.15 18.55 4 15.143 4 11a8 8 0 1116 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity={0.15}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21c4.418-2 8-5.582 8-10a8 8 0 10-16 0c0 4.418 3.582 8 8 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
        fill={color}
      />
      <path
        d="M20 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M20 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
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

Location1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Location1.displayName = 'Location1';
export default createIcon(Location1);
