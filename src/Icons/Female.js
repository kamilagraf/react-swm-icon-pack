import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Female = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 18H10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 18H15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 13L12 21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C13.1256 3 14.1643 3.37194 15 3.99963"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 18L15 18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 13L12 21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8Z"
        fill={color}
      />
      <path d="M9 18L15 18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 13L12 21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 18L15 18" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 13L12 21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
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
    default:
      return <Outline />;
  }
};

Female.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Female.displayName = 'Female';
export default createIcon(Female);
