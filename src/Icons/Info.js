import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Info = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12 5.01001L12 5.00002" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L12 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M12 5.01001L12 5.00002" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L12 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M12 5.01001L12 5.00002" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L12 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3 12H8.5L10 15H14L16 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 18V12L18.2433 4.64888C18.097 4.25857 17.7238 4 17.307 4H6.693C6.27616 4 5.90304 4.25857 5.75667 4.64888L3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z"
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
    default:
      return <Outline />;
  }
};

Info.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Info.displayName = 'Info';
export default createIcon(Info);
