import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Print = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M16 18h4V9H4v9h4v3h8v-6H8m0-6V4a1 1 0 011-1h6a1 1 0 011 1v2.5"
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
        d="M16 18c0-1.333-.222-2.5-.444-2.667C15.333 15.167 13.778 15 12 15s-3.333.167-3.556.333C8.222 15.5 8 16.667 8 18m8 0c0 1.333-.222 2.5-.444 2.667-.223.166-1.778.333-3.556.333s-3.333-.167-3.556-.333C8.222 20.5 8 19.333 8 18m8 0s3.5-.25 4-.5 1-2 1-4-.5-3.75-1-4c-.32-.16-1.873-.32-4-.415M8 18s-3.5-.25-4-.5-1-2-1-4 .5-3.75 1-4c.32-.16 1.873-.32 4-.415m0 0A91.664 91.664 0 0112 9c1.436 0 2.808.032 4 .085m-8 0V7c0-1.778.222-3.333.444-3.556C8.667 3.222 10.222 3 12 3s3.333.222 3.556.444C15.778 3.667 16 5.222 16 7v2.085"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 9H4v9h4v-3h8v3h4V9z" fill={color} />
      <path
        d="M8 18H4V9h16v9h-4m0-9V4a1 1 0 00-1-1H9a1 1 0 00-1 1v5m0 6h8v6H8v-6z"
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
        d="M8 18H4V9h16v9h-4m0-9V4a1 1 0 00-1-1H9a1 1 0 00-1 1v5m0 6h8v6H8v-6z"
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
        d="M8 18H4V9h16v9h-4m0-9V4a1 1 0 00-1-1H9a1 1 0 00-1 1v5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 15h8v6H8v-6z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Print.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Print.displayName = 'SvgPrint';
export default createIcon(Print);
