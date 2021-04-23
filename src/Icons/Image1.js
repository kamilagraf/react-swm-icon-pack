import * as React from 'react';
import PropTypes from 'prop-types';

const Image1 = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 18a2 2 0 002 2h12a2 2 0 002-2v-4M4 18l3.848-3.492a2 2 0 012.426-.159l.51.34a2 2 0 002.358-.103l2.648-2.118a2 2 0 012.45-.038L20 14M4 18v-3m16-1V6a2 2 0 00-2-2h-1M4 11V6a2 2 0 012-2h7m-2 5a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M4.468 17.532C5.623 19.715 7.928 20.5 12 20.5c5.625 0 7.88-1.498 8.385-6.115M4.468 17.532C3.78 16.229 3.5 14.429 3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5c0 .874-.036 1.668-.115 2.385M4.468 17.532l3.118-3.118a2 2 0 012.828 0l.172.172a2 2 0 002.828 0l2.172-2.172a2 2 0 012.828 0l1.971 1.971m-9.694-5.539a1.847 1.847 0 11-3.693-.001 1.847 1.847 0 013.693.001z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" fill={color} />
      <path
        d="M4 18V6a2 2 0 012-2h12a2 2 0 012 2v8M4 18a2 2 0 002 2h12a2 2 0 002-2v-4M4 18l3.848-3.492a2 2 0 012.426-.159l.51.34a2 2 0 002.358-.103l2.648-2.118a2 2 0 012.45-.038L20 14m-9-5a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M4 18V6a2 2 0 012-2h12a2 2 0 012 2v8M4 18a2 2 0 002 2h12a2 2 0 002-2v-4M4 18l3.848-3.492a2 2 0 012.426-.159l.51.34a2 2 0 002.358-.103l2.648-2.118a2 2 0 012.45-.038L20 14m-9-5a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M4 18l3.586-3.586a2 2 0 012.828 0l.172.172a2 2 0 002.828 0l2.172-2.172a2 2 0 012.828 0L20 14m-9.309-5.154a1.847 1.847 0 11-3.693-.001 1.847 1.847 0 013.693.001z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
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

Image1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Image1.displayName = 'SvgImage1';
export default Image1;
