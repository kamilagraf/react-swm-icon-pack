import * as React from 'react';
import PropTypes from 'prop-types';

const Edit4 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 20H4V4h7m1 16h8v-7m-5.5.5L12 16H8v-4l6-6m4 4l3-3-4-4-3 3m4 4l-1 1m1-1l-4-4"
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
        d="M14.944 5.188l-4.998 4.998c-.659.659-1.179 1.458-1.337 2.376-.16.927-.213 2.077.335 2.626.549.548 1.7.495 2.626.335.918-.158 1.717-.678 2.376-1.337l4.998-4.998m-4-4l4 4m-4-4s3-3 5-1-1 5-1 5M20.5 12c0 6.5-2 8.5-8.5 8.5s-8.5-2-8.5-8.5 2-8.5 8.5-8.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M8 16h4l6-6-4-4-6 6v4z" fill={color} />
      <path
        d="M11 4H3v16h16v-8m-6-6l-6 6v4h4l6-6m-4-4l3-3 4 4-3 3m-4-4l4 4"
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
        d="M12 4H4v16h16v-8m-6-6l-6 6v4h4l6-6m-4-4l3-3 4 4-3 3m-4-4l4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M14 6l4 4M8 12l9-9 4 4-9 9H8v-4z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4H4v16h16v-8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Edit4.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Edit4.displayName = 'SvgEdit4';
export default Edit4;
