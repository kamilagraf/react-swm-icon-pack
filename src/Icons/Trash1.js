import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Trash1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 6v8m0 4a2 2 0 01-2 2H8a2 2 0 01-2-2v-5m0-7v3m9-3V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1M4 6h16"
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
        d="M18 6c0 5.859 1.369 14-6 14S6 11.859 6 6m9 0V5c0-1.775-1.637-2-3-2s-3 .225-3 2v1M4 6h16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M18 18V6H6v12a2 2 0 002 2h8a2 2 0 002-2z" fill={color} />
      <path
        d="M18 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6m9 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1M4 6h16"
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
        d="M18 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6m9 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1M4 6h16"
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
        d="M15 6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6M4 6h16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Trash1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Trash1.displayName = 'SvgTrash1';
export default createIcon(Trash1);
