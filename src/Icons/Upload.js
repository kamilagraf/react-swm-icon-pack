import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Upload = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3a5 5 0 015 5v1M7 9V8c0-1.126.372-2.165 1-3M7 9a4 4 0 00-2 7.465M7 9c.433 0 .85.069 1.24.196M19 16.465A3.998 3.998 0 0019.646 10M12 21V11l4 4m-8 0l2-2"
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
        d="M7 9V8a5 5 0 0110 0v1a4 4 0 012 7.465M7 9a4 4 0 00-2 7.465M7 9c.433 0 .85.069 1.24.196M12 11v10m0-10l4 4m-4-4l-4 4"
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
        d="M7 9V8a5 5 0 0110 0v1a4 4 0 012 7.465M7 9a4 4 0 00-2 7.465M7 9c.433 0 .85.069 1.24.196M12 11v10m0-10l4 4m-4-4l-4 4"
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
        d="M7 9V8a5 5 0 0110 0v1a4 4 0 012 7.465M7 9a4 4 0 00-2 7.465M7 9c.433 0 .85.069 1.24.196M12 11v10m0-10l4 4m-4-4l-4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 11v10m0-10l4 4m-4-4l-4 4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7 9V8a5 5 0 0110 0v1a4 4 0 012 7.465M7 9a4 4 0 00-2 7.465M7 9c.433 0 .85.069 1.24.196"
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

Upload.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Upload.displayName = 'Upload';
export default createIcon(Upload);
