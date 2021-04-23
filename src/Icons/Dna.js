import * as React from 'react';
import PropTypes from 'prop-types';

const Dna = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12.192 12.192a4 4 0 000 5.657l2.829 2.829m-2.829-8.486a4 4 0 015.657 0m-5.657 0a4 4 0 000-5.656m0 5.656a4 4 0 01-5.656 0m11.313 0l2.829 2.829m-2.829-2.829l-2.828 2.829m-2.829-8.485L10.778 7.95m1.414-1.414L8.657 3m-2.121 9.192L3.707 9.364m2.829 2.828l1.414-1.414M3.707 9.364L3 8.657m.707.707l2.829-2.828m14.142 8.485l.707.707m-.707-.707l-1.415 1.414m-4.242 4.243l.707.707m-.707-.707l1.414-1.415"
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
        d="M17.657 12l3.535 3.536M17.657 12A4 4 0 0012 12m5.657 0L12 17.657m3.536 3.535L12 17.657m0 0A4 4 0 0112 12m0 0a4 4 0 01-5.657 0M12 12a4 4 0 000-5.657M6.343 12L2.808 8.464M6.343 12L12 6.343M8.464 2.808L12 6.343m2.828 14.142l5.657-5.657M3.515 9.172l5.657-5.657"
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
        opacity={0.15}
        d="M12 12a4 4 0 015.657 0l2.828 2.829-5.657 5.656L12 17.657A4 4 0 0112 12a4 4 0 01-5.657 0L3.515 9.172l5.657-5.657L12 6.343A4 4 0 0112 12z"
        fill={color}
      />
      <path
        d="M12.192 17.85a4 4 0 010-5.658m0 5.657l5.657-5.657m-5.657 5.657l2.829 2.829m-2.829-8.486a4 4 0 015.657 0m-5.657 0a4 4 0 000-5.656m0 5.656a4 4 0 01-5.656 0m11.313 0l2.829 2.829m-4.95 6.364l-.707-.707m6.364-4.95l-.707-.707m-8.486-8.485l-5.656 5.656m5.656-5.656L9.364 3.707m-2.828 8.485L3.707 9.364M3 8.657l.707.707M8.657 3l.707.707m0 0L3.707 9.364m16.97 5.657l-5.656 5.657"
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
        d="M12.192 17.85a4 4 0 010-5.658m0 5.657l5.657-5.657m-5.657 5.657l2.829 2.829m-2.829-8.486a4 4 0 015.657 0m-5.657 0a4 4 0 000-5.656m0 5.656a4 4 0 01-5.656 0m11.313 0l2.829 2.829m-4.95 6.364l-.707-.707m6.364-4.95l-.707-.707m-8.486-8.485l-5.656 5.656m5.656-5.656L9.364 3.707m-2.828 8.485L3.707 9.364M3 8.657l.707.707M8.657 3l.707.707m0 0L3.707 9.364m16.97 5.657l-5.656 5.657"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M12.192 17.85l5.657-5.658m-5.657-5.656l-5.657 5.656m2.829-8.485L3.707 9.364m16.97 5.657l-5.656 5.657"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.192 12.192a4 4 0 000 5.657l2.829 2.829.707.707m-3.536-9.193a4 4 0 015.657 0l2.829 2.829.707.707m-9.193-3.536a4 4 0 000-5.656L9.364 3.707 8.657 3m3.535 9.192a4 4 0 01-5.656 0L3.707 9.364 3 8.657"
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

Dna.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Dna.displayName = 'SvgDna';
export default Dna;
