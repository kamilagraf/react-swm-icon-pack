import * as React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M22 12s-.829 1.596-2.388 3.264M9.764 5.295A8.618 8.618 0 0112 5c2.878 0 5.198 1.432 6.876 3M4.35 8.778C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18"
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
        d="M9.764 5.295A8.618 8.618 0 0112 5c3.757 0 6.564 2.44 8.232 4.44a3.96 3.96 0 010 5.12c-.192.23-.398.466-.62.704M4.349 8.777c-.207.223-.401.445-.582.661a3.961 3.961 0 000 5.122C5.436 16.56 8.242 19 12 19a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.003 3.003 0 012.458 2.459M3 3l18 18"
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
        d="M9.764 5.295A8.618 8.618 0 0112 5c6.364 0 10 7 10 7s-.829 1.596-2.388 3.264M4.349 8.777C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18"
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
        d="M9.764 5.295A8.618 8.618 0 0112 5c6.364 0 10 7 10 7s-.829 1.596-2.388 3.264M4.349 8.777C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18"
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
        d="M11.5 14.959A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.764 5.295A8.618 8.618 0 0112 5c6.364 0 10 7 10 7s-.829 1.596-2.388 3.264M4.349 8.777C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306"
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

EyeClosed.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

EyeClosed.displayName = 'SvgEyeClosed';
export default EyeClosed;
