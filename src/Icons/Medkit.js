import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Medkit = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 18a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v5m-5-7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m3 3v7m-3.5-3.5H10m5.5 0H12"
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
        d="M12 9.5v7M8.5 13h7M9 6.093A47.649 47.649 0 0112 6c1.059 0 2.079.035 3 .093m-6 0V5c0-1.775 1.637-2 3-2s3 .225 3 2v1.093m-6 0s-3.667.296-4.111.685C4.543 7.08 4.198 8.792 4.06 11 4.022 11.633 4 12.307 4 13c0 3.111.444 5.833.889 6.222.444.39 3.555.778 7.111.778 3.556 0 6.667-.389 7.111-.778.445-.389.889-3.11.889-6.222 0-.693-.022-1.367-.061-2-.137-2.208-.483-3.92-.828-4.222-.444-.39-4.111-.685-4.111-.685"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 9a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" fill={color} />
      <path
        d="M15 7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m3 3v7m-3.5-3.5h7M6 20h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z"
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
        d="M15 7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m3 3v7m-3.5-3.5h7M6 20h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 10v7m-3.5-3.5h7" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2M6 20h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z"
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

Medkit.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Medkit.displayName = 'Medkit';
export default createIcon(Medkit);
