import * as React from 'react';
import PropTypes from 'prop-types';

const EyeOpen = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M22 12s-3.636 7-10 7-10-7-10-7 3.636-7 10-7c2.878 0 5.198 1.432 6.876 3M9 12a3 3 0 103-3"
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
        d="M3.767 14.56a3.96 3.96 0 010-5.12C5.436 7.44 8.242 5 12 5c3.757 0 6.564 2.44 8.233 4.44a3.96 3.96 0 010 5.12C18.563 16.56 15.757 19 12 19c-3.758 0-6.564-2.44-8.233-4.44z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity={0.15}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7zm3 7a3 3 0 11-6 0 3 3 0 016 0z"
        fill={color}
      />
      <path
        d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7z"
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

EyeOpen.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

EyeOpen.displayName = 'SvgEyeOpen';
export default EyeOpen;
