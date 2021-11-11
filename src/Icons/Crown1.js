import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Crown1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M16 9L20 5V16H4V5L6 7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 9L12 5L14 7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 19H20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M4 19H20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M5 16C4.44772 16 4 15.5523 4 15V7.41422C4 6.52331 5.07714 6.07714 5.70711 6.70711L7.29289 8.2929C7.68342 8.68342 8.31658 8.68342 8.70711 8.2929L11.2929 5.70711C11.6834 5.31658 12.3166 5.31658 12.7071 5.70711L15.2929 8.2929C15.6834 8.68342 16.3166 8.68342 16.7071 8.2929L18.2929 6.70711C18.9229 6.07714 20 6.52331 20 7.41421V15C20 15.5523 19.5523 16 19 16H5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M4 16V5L8 9L12 5L16 9L20 5V16H4Z" fill={color} />
      <path d="M4 16V5L8 9L12 5L16 9L20 5V16H4Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 19H20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 16V5L8 9L12 5L16 9L20 5V16H4Z" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 19H20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Crown1.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Crown1.displayName = 'Crown1';
export default createIcon(Crown1);
