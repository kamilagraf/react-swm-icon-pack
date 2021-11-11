import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Stop = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M13 6H18V11" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 6H6V18H18V15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 6C9.33333 6 7 6.33333 6.66667 6.66667C6.33333 7 6 9.33333 6 12C6 14.6667 6.33333 17 6.66667 17.3333C7 17.6667 9.33333 18 12 18C14.6667 18 17 17.6667 17.3333 17.3333C17.6667 17 18 14.6667 18 12C18 9.33333 17.6667 7 17.3333 6.66667C17 6.33333 14.6667 6 12 6Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M6 6H18V18H6V6Z" fill={color} />
      <path d="M6 6H18V18H6V6Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M6 6H18V18H6V6Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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
    default:
      return <Outline />;
  }
};

Stop.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Stop.displayName = 'Stop';
export default createIcon(Stop);
