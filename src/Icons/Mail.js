import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Mail = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7.5 9.5l3.086 3.086a2 2 0 002.828 0l7.293-7.293M5 7L3.293 5.293M18 19h2a1 1 0 001-1V6a.997.997 0 00-.293-.707M14 19H4a1 1 0 01-1-1V6c0-.276.112-.526.293-.707m0 0A.997.997 0 014 5h16c.276 0 .526.112.707.293"
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
        d="M19.706 6.295C18.262 4.99 15.83 4.5 12 4.5c-3.83 0-6.262.49-7.705 1.795m15.41 0C21 7.465 21.5 9.288 21.5 12c0 5.735-2.235 7.5-9.5 7.5-7.265 0-9.5-1.765-9.5-7.5 0-2.712.5-4.536 1.795-5.705m15.41 0l-6.29 6.29a2 2 0 01-2.83 0l-6.29-6.29"
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
        d="M21 18V6a.997.997 0 00-.293-.707L20.5 5.5l-7.086 7.086a2 2 0 01-2.828 0L3.5 5.5l-.207-.207A.997.997 0 003 6v12a1 1 0 001 1h16a1 1 0 001-1z"
        fill={color}
      />
      <path
        d="M3.293 5.293A.997.997 0 014 5h16c.276 0 .526.112.707.293m-17.414 0A.997.997 0 003 6v12a1 1 0 001 1h16a1 1 0 001-1V6a.997.997 0 00-.293-.707m-17.414 0l7.293 7.293a2 2 0 002.828 0l7.293-7.293"
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
        d="M3.293 5.293A.997.997 0 014 5h16c.276 0 .526.112.707.293m-17.414 0A.997.997 0 003 6v12a1 1 0 001 1h16a1 1 0 001-1V6a.997.997 0 00-.293-.707m-17.414 0l7.293 7.293a2 2 0 002.828 0l7.293-7.293"
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
        d="M3.5 5.5l7.086 7.086a2 2 0 002.828 0L20.5 5.5"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6z"
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

Mail.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Mail.displayName = 'SvgMail';
export default createIcon(Mail);
