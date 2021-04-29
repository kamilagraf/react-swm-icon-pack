import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Forward = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 13.8L5 18V6l4 2.4m9 5.6l3-2-9-6v12l3-2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M10.137 15.42c.148 1.72.363 2.58.363 2.58s2-.5 5.5-2.5 4.5-3.5 4.5-3.5-1-1.5-4.5-3.5S10.5 6 10.5 6s-.216.866-.364 2.597m.001 6.824A40.021 40.021 0 0110 12c0-1.369.059-2.503.136-3.403m.001 6.824C8.392 16.43 6.477 17.506 4.5 18c0 0-.5-2-.5-6s.5-6 .5-6c1.903.476 4.054 1.47 5.636 2.597"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M10 18V6l9 6-9 6z" fill={color} />
      <path d="M10 13.8L3 18V6l7 4.2m0 7.8V6l9 6-9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 13.8L5 18V6l7 4.2m0 7.8V6l9 6-9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M10 13.8L3 18V6l7 4.2" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18V6l9 6-9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Forward.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Forward.displayName = 'SvgForward';
export default createIcon(Forward);
