import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const CameraDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M11.66 15.98a3.001 3.001 0 01-2.64-2.626M9.5 5h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2M5 19a2 2 0 01-2-2V9c0-.507.189-.97.5-1.323M21 16.5V13m-6.5 6H9.02M3 3l18 18"
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
        d="M3 3l18 18m-9-5a3 3 0 01-3-3m1-7.838C10.489 5.06 11.137 5 12 5c5 0 2.808 2.043 4 2.114 2.127.125 3.68.339 4 .553.5.333 1 2.666 1 5.333 0 1.095-.084 2.133-.218 3M15 18.937c-.935.04-1.95.063-3 .063-4 0-7.5-.333-8-.667C3.5 18 3 15.667 3 13c0-2.215.345-4.2.748-5"
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
        d="M11.66 15.98a3.001 3.001 0 01-2.64-2.626M9.5 5h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v7.5M3.5 7.677C3.189 8.03 3 8.493 3 9v8a2 2 0 002 2h9.5M3 3l18 18"
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
        d="M11.66 15.98a3.001 3.001 0 01-2.64-2.626M9.5 5h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v7.5M3.5 7.677C3.189 8.03 3 8.493 3 9v8a2 2 0 002 2h9.5M3 3l18 18"
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
        d="M11.66 15.98a3.001 3.001 0 01-2.64-2.626M3 3l18 18"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 5h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v7.5M3.5 7.677C3.189 8.03 3 8.493 3 9v8a2 2 0 002 2h9.5"
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

CameraDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CameraDisabled.displayName = 'SvgCameraDisabled';
export default createIcon(CameraDisabled);
