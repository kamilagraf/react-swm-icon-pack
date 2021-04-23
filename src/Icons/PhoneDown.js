import * as React from 'react';
import PropTypes from 'prop-types';

const PhoneDown = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21.792 11.8c.694.58.735 1.672.103 2.305l-1.66 1.66c-.265.27-.62.436-.998.464-1.075.082-3.133-1.231-3.66-2.044-.412-.635-.25-1.529-.25-2.245A12.491 12.491 0 0012 11.496m-3.303.45c0 .717.159 1.61-.254 2.246-.529.815-2.598 2.14-3.675 2.051a1.56 1.56 0 01-1.003-.48l-1.656-1.655c-.636-.63-.595-1.728.101-2.31C6.568 7.434 12.853 6.545 18 9.074"
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
        clipRule="evenodd"
        d="M12 8c8.389 0 9.713 2.66 9.89 3.78.043.166.739 3.858-1.991 4.145-6.793.694-2.123-4.008-7.9-3.83-5.776.179-1.106 4.524-7.897 3.83-2.73-.287-2.035-3.98-1.992-4.144C2.287 10.66 3.612 8.001 12 8z"
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
        d="M3.764 15.764l-1.656-1.656c-.635-.63-.595-1.728.102-2.31 5.512-5.52 14.107-5.48 19.582.003.693.578.734 1.671.103 2.304l-1.66 1.66c-.265.27-.62.436-.999.464-1.075.082-3.133-1.231-3.66-2.044-.41-.635-.25-1.529-.249-2.245a12.502 12.502 0 00-6.63.007c0 .716.159 1.609-.254 2.245-.53.815-2.598 2.14-3.676 2.051a1.56 1.56 0 01-1.003-.48z"
        fill={color}
      />
      <path
        d="M3.764 15.764l-1.656-1.656c-.635-.63-.595-1.728.102-2.31 5.512-5.52 14.107-5.48 19.582.003.693.578.734 1.671.103 2.304l-1.66 1.66c-.265.27-.62.436-.999.464-1.075.082-3.133-1.231-3.66-2.044-.41-.635-.25-1.529-.249-2.245a12.502 12.502 0 00-6.63.007c0 .716.159 1.609-.254 2.245-.53.815-2.598 2.14-3.676 2.051a1.56 1.56 0 01-1.003-.48z"
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
        d="M3.765 15.764l-1.656-1.656c-.636-.63-.595-1.728.101-2.31 5.512-5.52 14.107-5.48 19.582.003.694.578.735 1.671.103 2.304l-1.66 1.66c-.265.27-.62.436-.998.464-1.075.082-3.133-1.231-3.66-2.044-.412-.635-.25-1.529-.25-2.245a12.502 12.502 0 00-6.63.007c0 .716.159 1.609-.254 2.245-.529.815-2.598 2.14-3.675 2.051a1.56 1.56 0 01-1.003-.48z"
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
        d="M2.21 11.798c-.697.582-.737 1.68-.102 2.31l1.656 1.656c.264.277.621.448 1.003.48 1.078.087 3.147-1.237 3.676-2.052.413-.636.253-1.53.254-2.245a12.503 12.503 0 016.63-.007c0 .716-.162 1.61.25 2.245.526.813 2.584 2.126 3.66 2.044a1.566 1.566 0 00.998-.465l1.66-1.66c.631-.632.59-1.725-.103-2.303"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.21 11.798c5.512-5.52 14.108-5.48 19.582.003"
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

PhoneDown.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PhoneDown.displayName = 'SvgPhoneDown';
export default PhoneDown;
