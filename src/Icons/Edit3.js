import * as React from 'react';
import PropTypes from 'prop-types';

const Edit3 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 11V4h8m4 0h4v16h-7m-2.5-2.5L8 20H4v-4l6-6m4 4l3-3-4-4-3 3m4 4l-1 1m1-1l-4-4"
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
        d="M9.944 10.188l-4.998 4.998c-.659.659-1.179 1.458-1.337 2.376-.16.927-.213 2.077.335 2.625.549.549 1.7.496 2.626.336.918-.158 1.717-.678 2.376-1.337l4.998-4.998m-4-4l4 4m-4-4s3-3 5-1-1 5-1 5M3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5-2 8.5-8.5 8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 20h4l6-6-4-4-6 6v4z" fill={color} />
      <path
        d="M12 20h8V4H4v8m6-2l-6 6v4h4l6-6m-4-4l3-3 4 4-3 3m-4-4l4 4"
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
        d="M12 20h8V4H4v8m6-2l-6 6v4h4l6-6m-4-4l3-3 4 4-3 3m-4-4l4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M10 10l4 4M4 16l9-9 4 4-9 9H4v-4z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20h8V4H4v8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Edit3.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Edit3.displayName = 'SvgEdit3';
export default Edit3;
