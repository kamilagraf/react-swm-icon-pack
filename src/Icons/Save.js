import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Save = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4 13V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 8V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V12"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 20V15H9V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 4C8.44444 4 5.33333 4.44444 4.88889 4.88889C4.44444 5.33333 4 8.44444 4 12C4 15.5556 4.44444 18.6667 4.88889 19.1111C5.20096 19.4232 6.82776 19.7353 9 19.8935C9.92143 19.9606 10.941 20 12 20C13.059 20 14.0786 19.9606 15 19.8935C17.1722 19.7353 18.799 19.4232 19.1111 19.1111C19.5556 18.6667 20 15.5556 20 12C20 11.3687 19.9621 10.4239 19.9316 9.76377C19.9088 9.27176 19.7009 8.80741 19.3526 8.45914L15.5409 4.6474C15.1926 4.29913 14.7282 4.09124 14.2362 4.06844C13.5761 4.03786 12.6313 4 12 4Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 19.8935V18C15 18 15 15 12 15C9 15 9 18 9 18V19.8935"
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
        d="M4 6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
        fill={color}
      />
      <path
        d="M6 20H18C19.1046 20 20 19.1046 20 18V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L15.5858 4.58579C15.2107 4.21071 14.702 4 14.1716 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 20V15H9V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M6 20H18C19.1046 20 20 19.1046 20 18V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L15.5858 4.58579C15.2107 4.21071 14.702 4 14.1716 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 20V15H9V20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

Save.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Save.displayName = 'Save';
export default createIcon(Save);
