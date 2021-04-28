import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Bolt = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M13.6 10H19L8 21l2-8H6l3-9h7l-1.2 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M15.726 4.686A.5.5 0 0015.26 4h-5.9a.5.5 0 00-.475.342l-2.667 8a.5.5 0 00.475.658H9.36a.5.5 0 01.485.621L8.438 19.25c-.123.492.48.833.838.475l8.87-8.87a.5.5 0 00-.353-.854h-3.454a.5.5 0 01-.465-.686l1.852-4.628z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M16 4H9l-3 9h4l-2 8 11-11h-5.4L16 4z" fill={color} />
      <path d="M16 4H9l-3 9h4l-2 8 11-11h-5.4L16 4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M16 4H9l-3 9h4l-2 8 11-11h-5.4L16 4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M16 4l-2.4 6H19L8 21" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4H9l-3 9h4l-2 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Bolt.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Bolt.displayName = 'SvgBolt';
export default createIcon(Bolt);
