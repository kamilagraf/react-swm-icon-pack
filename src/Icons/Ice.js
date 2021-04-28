import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Ice = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3v6m0 12v-9l7.794-4.5M15 4l-3 3-3-3m0 16l3-3 3 3M4.206 7.5l15.588 9M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098M4.206 16.5L10 13.155M7.67 14.5l-1.098 4.098m-3-5.196L5 13.785M16.33 9.5l1.098-4.098m3 5.196L19 10.215"
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
        d="M12 3v18m3-17l-3 3-3-3m0 16l3-3 3 3M4.206 7.5l15.588 9M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098M4.206 16.5l15.588-9M3.572 13.402L7.67 14.5l-1.098 4.098m13.856-8L16.33 9.5l1.098-4.098"
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
        d="M12 3v18m3-17l-3 3-3-3m0 16l3-3 3 3M4.206 7.5l15.588 9M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098M4.206 16.5l15.588-9M3.572 13.402L7.67 14.5l-1.098 4.098m13.856-8L16.33 9.5l1.098-4.098"
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
        d="M12 3v18m3-17l-3 3-3-3m0 16l3-3 3 3M4.206 7.5l15.588 9M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098M4.206 16.5l15.588-9M3.572 13.402L7.67 14.5l-1.098 4.098m13.856-8L16.33 9.5l1.098-4.098"
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
        d="M15 4l-3 3-3-3m0 16l3-3 3 3M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098m-16.856 0L7.67 14.5l-1.098 4.098m13.856-8L16.33 9.5l1.098-4.098"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v18M4.206 7.5l15.588 9m-15.588 0l15.588-9"
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

Ice.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Ice.displayName = 'SvgIce';
export default createIcon(Ice);
