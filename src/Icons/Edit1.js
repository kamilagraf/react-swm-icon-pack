import * as React from 'react';
import PropTypes from 'prop-types';

const Edit1 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M14 6l4 4M7.25 12.75L10.5 9.5 17 3l4 4-3.25 3.25-.813.813M4.813 15.186L4 16v4h4l3.25-3.25 3.25-3.25"
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
        d="M14.444 5.688l-8.998 8.998c-.659.659-1.179 1.458-1.337 2.376-.16.927-.213 2.077.335 2.625.549.549 1.7.496 2.626.336.918-.158 1.717-.678 2.376-1.337l8.998-8.998m-4-4l4 4m-4-4s3-3 5-1-1 5-1 5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 20h4l10-10-4-4L4 16v4z" fill={color} />
      <path
        d="M17 10l3-3-4-4-3 3m4 4L7 20H3v-4L13 6m4 4l-4-4"
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
        d="M18 10l3-3-4-4-3 3m4 4L8 20H4v-4L14 6m4 4l-4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M14 6l4 4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 3L4 16v4h4L21 7l-4-4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Edit1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Edit1.displayName = 'SvgEdit1';
export default Edit1;
