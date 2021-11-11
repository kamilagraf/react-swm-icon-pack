import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const DocumentMinus = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 14H15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5 5V3H13H14L19 8V9V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5 10V21H19V16" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 3V7C13 8 14 9 15 9C16 9 18.1667 9 19 9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 14H15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13.0714 2.52927V6.83334C13.0714 7.93791 13.9668 8.83334 15.0714 8.83334H19.3494"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 2.5C6.26471 2.5 4.5 4.73529 4.5 12C4.5 19.2647 6.26471 21.5 12 21.5C17.7353 21.5 19.5 19.2647 19.5 12C19.5 10.8146 19.453 9.76307 19.3495 8.83333L13.0714 2.52926C12.7307 2.5095 12.3738 2.5 12 2.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill={color} />
      <path d="M9 14H15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19 21H5V3H13H14L19 8V9V21Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 3V7C13 8 14 9 15 9C16 9 18.1667 9 19 9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 14H15" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19 21H5V3H13H14L19 8V9V21Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 3V7C13 8 14 9 15 9C16 9 18.1667 9 19 9" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

DocumentMinus.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

DocumentMinus.displayName = 'DocumentMinus';
export default createIcon(DocumentMinus);
