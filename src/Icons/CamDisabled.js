import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CamDisabled = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M10 5.5h5a1 1 0 011 1v5m-13-4V13m11 5.5H4a1 1 0 01-1-1V17m18-.5V7l-2.5 1M3 3l18 18"
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
        d="M3 3l18 18M10 5c3.111 0 5.833.389 6.222.778.255.255.51 1.51.655 3.222m0 0c.077.9.123 1.927.123 3m-.123-3L21 7s.5 2 .5 5-.5 5-.5 5M3.226 8A33.593 33.593 0 003 12c0 3.111.389 5.833.778 6.222.389.39 3.11.778 6.222.778 1.495 0 2.9-.09 4-.226"
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
        d="M10 5.5h5a1 1 0 011 1v5m-13-4v10a1 1 0 001 1h10M16 9l5-2v9.5M3 3l18 18"
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
        d="M10 5.5h5a1 1 0 011 1v5m-13-4v10a1 1 0 001 1h10M16 9l5-2v9.5M3 3l18 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M16 9l5-2v9.5M3 3l18 18" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10 5.5h5a1 1 0 011 1v5m-13-4v10a1 1 0 001 1h10"
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

CamDisabled.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CamDisabled.displayName = 'SvgCamDisabled';
export default createIcon(CamDisabled);
