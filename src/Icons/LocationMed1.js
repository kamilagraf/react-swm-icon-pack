import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const LocationMed1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 21c4.418-2 8-5.582 8-10a8 8 0 10-16 0c0 2.703 1.341 5.094 3.394 7M12 7.5v7M8.5 11H10m5.5 0H12"
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
        d="M12 7.5v7M8.5 11h7m4.5 0c0 4.143-3.15 7.55-7.184 9.608a1.796 1.796 0 01-1.632 0C7.15 18.55 4 15.143 4 11a8 8 0 1116 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 11c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z" fill={color} />
      <path
        d="M12 7.5v7M8.5 11h7m4.5 0c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
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
        d="M12 7.5v7M8.5 11h7m4.5 0c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10a8 8 0 1116 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 7.5v7M8.5 11h7" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

LocationMed1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

LocationMed1.displayName = 'SvgLocationMed1';
export default createIcon(LocationMed1);
