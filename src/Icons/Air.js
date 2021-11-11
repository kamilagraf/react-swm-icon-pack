import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Air = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path id="shape" d="M8 12H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        id="shape_2"
        d="M5 9H10M16.5 4C17.8807 4 19 5.11929 19 6.5C19 7.88071 17.8807 9 16.5 9H14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="shape_3"
        d="M4 15H7M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15H11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path id="shape" d="M8 12H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        id="shape_2"
        d="M5 9H16.5C17.8807 9 19 7.88071 19 6.5C19 5.11929 17.8807 4 16.5 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="shape_3"
        d="M4 15H17C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path id="shape" d="M8 12H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        id="shape_2"
        d="M5 9H16.5C17.8807 9 19 7.88071 19 6.5C19 5.11929 17.8807 4 16.5 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="shape_3"
        d="M4 15H17C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path id="shape" d="M8 12H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        id="shape_2"
        d="M5 9H16.5C17.8807 9 19 7.88071 19 6.5C19 5.11929 17.8807 4 16.5 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="shape_3"
        d="M4 15H17C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19"
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
    default:
      return <Outline />;
  }
};

Air.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Air.displayName = 'Air';
export default createIcon(Air);
