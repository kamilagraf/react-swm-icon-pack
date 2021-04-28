import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const ScreenDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 6a1 1 0 00-1-1H9.5M20 15v-5M4 8.5V15a1 1 0 001 1h7v2m4 2H8M3 3l18 18"
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
        d="M3 3l18 18m-9-.5v-4c-4 0-7.5.167-8-.167C3.5 16 3 12.667 3 10c0-.5.018-1.006.05-1.5m8.95 12h4m-4 0H8M9 3.563c.935-.04 1.95-.063 3-.063 4 0 7.5.333 8 .667.5.333 1 3.166 1 5.833 0 1.645-.19 3.354-.454 4.5"
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
        d="M20 15V6a1 1 0 00-1-1H9.5M4 8.5V15a1 1 0 001 1h7v4m0 0h4m-4 0H8M3 3l18 18"
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
        d="M20 15V6a1 1 0 00-1-1H9.5M4 8.5V15a1 1 0 001 1h7v4m0 0h4m-4 0H8M3 3l18 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 16v4m0 0h4m-4 0H8M3 3l18 18" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 15V6a1 1 0 00-1-1H9.5M4 8.5V15a1 1 0 001 1h7"
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

ScreenDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ScreenDisabled.displayName = 'SvgScreenDisabled';
export default createIcon(ScreenDisabled);
