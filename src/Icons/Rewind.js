import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Rewind = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 13.8l7 4.2V6l-4 2.4M6 14l-3-2 9-6v12l-3-2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M13.863 8.58C13.715 6.86 13.5 6 13.5 6s-2 .5-5.5 2.5S3.5 12 3.5 12s1 1.5 4.5 3.5 5.5 2.5 5.5 2.5.216-.866.364-2.597m-.001-6.824c.078.903.137 2.044.137 3.421 0 1.369-.059 2.503-.136 3.403m-.001-6.824C15.608 7.57 17.523 6.494 19.5 6c0 0 .5 2 .5 6s-.5 6-.5 6c-1.903-.476-4.054-1.47-5.636-2.597"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 18V6l-9 6 9 6z" fill={color} />
      <path d="M12 13.8l7 4.2V6l-7 4.2m0 7.8V6l-9 6 9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 13.8l7 4.2V6l-7 4.2m0 7.8V6l-9 6 9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 13.8l7 4.2V6l-7 4.2" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18V6l-9 6 9 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Rewind.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Rewind.displayName = 'SvgRewind';
export default createIcon(Rewind);
