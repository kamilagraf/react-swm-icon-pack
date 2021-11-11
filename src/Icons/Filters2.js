import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Filters2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M7 5L4 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14 5L20 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 12L10 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 12L4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M11 19L20 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M10 5L4 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14 5L20 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 12L4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 19L20 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z" fill={color} />
        <path
          d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z"
          fill={color}
        />
        <path d="M6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17Z" fill={color} />
      </g>
      <path d="M10 5L4 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14 5L20 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 12L4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 19L20 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M10 5L4 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14 5L20 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 12L4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 19L20 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
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

Filters2.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Filters2.displayName = 'Filters2';
export default createIcon(Filters2);
