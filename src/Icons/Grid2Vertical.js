import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Grid2Vertical = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M3.5 18v2.5h7v-17h-7V14m17-8V3.5h-7v17h7V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M6.5 3c-1.556 0-2.917.5-3.111 1C3.194 4.5 3 8 3 12s.194 7.5.389 8c.194.5 1.555 1 3.111 1 1.556 0 2.917-.5 3.111-1 .195-.5.389-4 .389-8s-.194-7.5-.389-8C9.417 3.5 8.056 3 6.5 3zM17.5 3c-1.556 0-2.917.5-3.111 1-.195.5-.389 4-.389 8s.194 7.5.389 8c.194.5 1.555 1 3.111 1 1.556 0 2.917-.5 3.111-1 .195-.5.389-4 .389-8s-.194-7.5-.389-8c-.194-.5-1.555-1-3.111-1z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M13.5 3.5h7v17h-7v-17z" fill={color} />
      <path d="M3.5 3.5h7v17h-7v-17zM13.5 3.5h7v17h-7v-17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3.5 3.5h7v17h-7v-17zM13.5 3.5h7v17h-7v-17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M13.5 3.5h7v17h-7v-17z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 3.5h7v17h-7v-17z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Grid2Vertical.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Grid2Vertical.displayName = 'SvgGrid2Vertical';
export default createIcon(Grid2Vertical);
