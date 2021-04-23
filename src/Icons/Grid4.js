import * as React from 'react';
import PropTypes from 'prop-types';

const Grid4 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M13.5 5V3.5h7v7h-7V9M5 13.5H3.5v7h7v-7H9m-5.5-10h7v7h-7v-7zm10 10h7v7h-7v-7z"
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
        d="M6.75 3C3.882 3 3 3.882 3 6.75s.882 3.75 3.75 3.75 3.75-.882 3.75-3.75S9.618 3 6.75 3zM6.75 13.5c-2.868 0-3.75.882-3.75 3.75S3.882 21 6.75 21s3.75-.882 3.75-3.75-.882-3.75-3.75-3.75zM17.25 3c-2.868 0-3.75.882-3.75 3.75s.882 3.75 3.75 3.75S21 9.618 21 6.75 20.118 3 17.25 3zM17.25 13.5c-2.868 0-3.75.882-3.75 3.75S14.382 21 17.25 21 21 20.118 21 17.25s-.882-3.75-3.75-3.75z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M3.5 13.5h7v7h-7v-7zM13.5 3.5h7v7h-7v-7zM13.5 13.5h7v7h-7v-7z" opacity={0.15} fill={color} />
      <path
        d="M3.5 3.5h7v7h-7v-7zM3.5 13.5h7v7h-7v-7zM13.5 3.5h7v7h-7v-7zM13.5 13.5h7v7h-7v-7z"
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
        d="M3.5 3.5h7v7h-7v-7zM3.5 13.5h7v7h-7v-7zM13.5 3.5h7v7h-7v-7zM13.5 13.5h7v7h-7v-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M13.5 3.5h7v7h-7v-7z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.5 3.5h7v7h-7v-7zM3.5 13.5h7v7h-7v-7zM13.5 13.5h7v7h-7v-7z"
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

Grid4.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Grid4.displayName = 'SvgGrid4';
export default Grid4;
