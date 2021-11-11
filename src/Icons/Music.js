import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Music = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M20 16.5V10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 17.5V6L20 3V6" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 19C18.8807 19 20 17.8807 20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5C15 17.8807 16.1193 19 17.5 19Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M9 17.5C9 17.5 8.5 13.5 8.5 11C8.5 8.5 9 6 9 6C9 6 11 5 14.5 4C18 3 20 3 20 3C20 3 19.5 6.5 19.5 9C19.5 11.5 20 16.5 20 16.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 16.5C20 17.8807 18.8807 19 17.5 19C16.1193 19 15 17.8807 15 16.5C15 15.1193 16.1193 14 17.5 14C18.8807 14 20 15.1193 20 16.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path
          d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z"
          fill={color}
        />
        <path
          d="M20 16.5C20 17.8807 18.8807 19 17.5 19C16.1193 19 15 17.8807 15 16.5C15 15.1193 16.1193 14 17.5 14C18.8807 14 20 15.1193 20 16.5Z"
          fill={color}
        />
      </g>
      <path d="M9 17.5V6L20 3V16.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M6.5 20C7.88071 20 9 18.8807 9 17.5C9 16.1193 7.88071 15 6.5 15C5.11929 15 4 16.1193 4 17.5C4 18.8807 5.11929 20 6.5 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 19C18.8807 19 20 17.8807 20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5C15 17.8807 16.1193 19 17.5 19Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 17.5V6L20 3V16.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M6.5 20C7.88071 20 9 18.8807 9 17.5C9 16.1193 7.88071 15 6.5 15C5.11929 15 4 16.1193 4 17.5C4 18.8807 5.11929 20 6.5 20Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 19C18.8807 19 20 17.8807 20 16.5C20 15.1193 18.8807 14 17.5 14C16.1193 14 15 15.1193 15 16.5C15 17.8807 16.1193 19 17.5 19Z"
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

Music.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Music.displayName = 'Music';
export default createIcon(Music);
