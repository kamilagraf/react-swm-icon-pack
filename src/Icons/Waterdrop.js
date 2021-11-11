import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Waterdrop = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14C5 10.5817 7.58172 6 12 3C14.4569 4.66824 16.3459 6.82559 17.5389 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M10.9055 3.80403C7.15837 6.7764 5 10.8745 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.8745 16.8416 6.7764 13.0945 3.80403C12.4523 3.29457 11.5477 3.29457 10.9055 3.80403Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M5 14C5 10.5817 7.58172 6 12 3C16.4183 6 19 10.5817 19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14Z"
        fill={color}
      />
      <path
        d="M12 3C7.58172 6 5 10.5817 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.5817 16.4183 6 12 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 3C7.58172 6 5 10.5817 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.5817 16.4183 6 12 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Waterdrop.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Waterdrop.displayName = 'Waterdrop';
export default createIcon(Waterdrop);
