import * as React from 'react';
import PropTypes from 'prop-types';

const PhoneCross = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19.026 20.993c1.046.094 1.978-.77 1.973-1.807v-2.71a1.805 1.805 0 00-.428-1.212c-.81-.953-3.586-1.563-4.686-1.329-.858.183-1.458 1.044-2.044 1.63A14.476 14.476 0 0110.543 13M8.41 10.145c.587-.586 1.45-1.185 1.633-2.04.234-1.097-.375-3.856-1.322-4.668A1.812 1.812 0 007.523 3H4.808c-1.034.001-1.895.929-1.8 1.97C3 12.903 8.482 19.35 16 20.722M21 3l-6 6m0-6l6 6"
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
        d="M21 3l-6 6m0-6l6 6M8.2 15.799C1.303 8.9 2.283 5.741 3.01 4.723c.094-.164 2.396-3.611 4.865-1.589C14 8.18 6.5 8 11.389 12.611c4.89 4.612 4.432-2.611 9.477 3.514 2.022 2.469-1.425 4.771-1.588 4.864-1.018.728-4.178 1.709-11.078-5.19z"
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
        d="M21 16.477v2.71c.004 1.035-.928 1.9-1.974 1.806C10 21 3 13.935 3.007 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04a14.466 14.466 0 005.43 5.42c.587-.585 1.187-1.446 2.045-1.629 1.1-.234 3.877.376 4.686 1.329.287.338.44.77.428 1.213z"
        fill={color}
      />
      <path
        d="M21 3l-6 6m0-6l6 6m0 7.477v2.71c.004 1.035-.928 1.9-1.974 1.806C10 21 3 13.935 3.007 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04a14.466 14.466 0 005.43 5.42c.587-.585 1.187-1.446 2.045-1.629 1.1-.234 3.877.376 4.686 1.329.287.338.44.77.428 1.213z"
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
        d="M21 3l-6 6m0-6l6 6m0 7.477v2.71c.004 1.035-.928 1.9-1.974 1.806C10 21 3 13.935 3.008 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04a14.467 14.467 0 005.43 5.42c.587-.585 1.187-1.446 2.045-1.629 1.1-.234 3.877.376 4.686 1.329.287.338.44.77.428 1.213z"
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
        d="M19.026 20.993c1.046.094 1.978-.77 1.973-1.807v-2.71a1.804 1.804 0 00-.428-1.212c-.81-.953-3.586-1.563-4.686-1.329-.858.183-1.458 1.044-2.045 1.63a14.467 14.467 0 01-5.43-5.42"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.026 20.993C10 21 3 13.935 3.007 4.969 2.913 3.93 3.774 3.001 4.808 3h2.715c.44-.004.865.151 1.198.437.947.812 1.556 3.57 1.322 4.667-.183.856-1.046 1.455-1.633 2.04M21 3l-6 6m0-6l6 6"
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

PhoneCross.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

PhoneCross.displayName = 'SvgPhoneCross';
export default PhoneCross;
