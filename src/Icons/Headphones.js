import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Headphones = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 21v-9a9 9 0 0118 0v9-7h-3a2 2 0 00-2 2v3a2 2 0 002 2M3 21h3a2 2 0 002-2v-3a2 2 0 00-2-2m-3 7v-7"
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
        d="M3 21v-9a9 9 0 0118 0v9M3 21v-8c2 0 5 .051 5 2.5v3C8 20.862 5 21 3 21zm18 0v-8c-2 0-5 .138-5 2.5v3c0 2.362 3 2.5 5 2.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M3 14h3a2 2 0 012 2v3a2 2 0 01-2 2H3v-7zM21 21h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3v7z" opacity={0.15} fill={color} />
      <path
        d="M3 21v-9a9 9 0 0118 0v9M3 21h3a2 2 0 002-2v-3a2 2 0 00-2-2H3v7zm18 0h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3v7z"
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
        d="M3 21v-9a9 9 0 0118 0v9M3 21h3a2 2 0 002-2v-3a2 2 0 00-2-2H3v7zm18 0h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3v7z"
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
        d="M3 21h3a2 2 0 002-2v-3a2 2 0 00-2-2H3m18 7h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 14v7-9a9 9 0 0118 0v9-7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Headphones.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Headphones.displayName = 'SvgHeadphones';
export default createIcon(Headphones);
