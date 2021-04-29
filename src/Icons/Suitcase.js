import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Suitcase = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m3 6v4m-8 0v2a2 2 0 002 2h12a2 2 0 002-2v-2M6 14h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
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
        d="M12 14v-2m0 2v2m0-2c-4 0-8-1-7.939-3M12 14c4 0 8-1 7.939-3M9 6.093A47.649 47.649 0 0112 6c1.059 0 2.079.035 3 .093m-6 0V5c0-1.775 1.637-2 3-2s3 .225 3 2v1.093m-6 0s-3.667.296-4.111.685C4.543 7.08 4.198 8.792 4.06 11M15 6.093s3.667.296 4.111.685c.345.302.691 2.014.828 4.222M4.06 11C4.022 11.633 4 12.307 4 13c0 3.111.444 5.833.889 6.222.444.39 3.555.778 7.111.778 3.556 0 6.667-.389 7.111-.778.445-.389.889-3.11.889-6.222 0-.693-.022-1.367-.061-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 8a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" fill={color} />
      <path
        d="M20 10v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m11-4V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m3 6v4m-6-2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
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
        d="M20 10v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m11-4V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m3 6v4m-6-2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
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
        d="M4 12a2 2 0 002 2h12a2 2 0 002-2m-5-6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12V8a2 2 0 012-2h12a2 2 0 012 2v4m0-2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m8 2v4"
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

Suitcase.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Suitcase.displayName = 'SvgSuitcase';
export default createIcon(Suitcase);
