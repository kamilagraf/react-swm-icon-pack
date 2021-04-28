import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const UserQuestion = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 15a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4h-4m0-12a4 4 0 103.5 2.062M20.953 13v-.005M19 7.4A2.043 2.043 0 0120.953 6C22.083 6 23 6.895 23 8c0 1.607-1.726 1.317-2.008 3"
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
        d="M21 13v.01M21 11c0-1.429 2-1.429 2-2.922C23 6.93 22.122 6 21 6c-.947 0-1.774.662-2 1.558M16 7a4 4 0 11-8 0 4 4 0 018 0zM6.5 21h11a2.5 2.5 0 002.5-2.5c0-4.08-6-4-8-4s-8-.08-8 4A2.5 2.5 0 006.5 21z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 11a4 4 0 100-8 4 4 0 000 8z" fill={color} />
      <path
        d="M20.953 13v-.005M19 7.4A2.043 2.043 0 0120.953 6C22.083 6 23 6.895 23 8c0 1.607-1.726 1.317-2.008 3M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
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
        d="M20.953 13v-.005M19 7.4A2.043 2.043 0 0120.953 6C22.083 6 23 6.895 23 8c0 1.607-1.726 1.317-2.008 3M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
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
        d="M21 13v.01M21 11c0-1.429 2-1.429 2-2.922C23 6.93 22.122 6 21 6c-.947 0-1.774.662-2 1.558M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

UserQuestion.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

UserQuestion.displayName = 'SvgUserQuestion';
export default createIcon(UserQuestion);
