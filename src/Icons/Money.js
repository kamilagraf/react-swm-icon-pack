import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Money = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 9.5v5m-12-5v5M18 7h2a1 1 0 011 1v8a1 1 0 01-1 1H10m4-10H4a1 1 0 00-1 1v8a1 1 0 001 1h2m8.5-5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
        d="M18 9.5v5m-12-5v5m8.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM3.556 7.556C4.083 7.278 7.778 7 12 7s7.917.278 8.444.556C20.972 7.833 21.5 9.778 21.5 12s-.528 4.167-1.056 4.444c-.527.278-4.222.556-8.444.556s-7.917-.278-8.444-.556C3.028 16.167 2.5 14.222 2.5 12s.528-4.167 1.056-4.444z"
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
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1H4zm8 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill={color}
      />
      <path
        d="M18 9.5v5m-12-5v5M4 17h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1zm10.5-5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
        d="M18 9.5v5m-12-5v5M4 17h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1zm10.5-5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
        d="M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9.5v5m-12-5v5M4 17h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1z"
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

Money.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Money.displayName = 'SvgMoney';
export default createIcon(Money);
