import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Money = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 7H20C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17H10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 7C7.77778 7 4.08333 7.27778 3.55556 7.55556C3.02778 7.83333 2.5 9.77778 2.5 12C2.5 14.2222 3.02778 16.1667 3.55556 16.4444C4.08333 16.7222 7.77778 17 12 17C16.2222 17 19.9167 16.7222 20.4444 16.4444C20.9722 16.1667 21.5 14.2222 21.5 12C21.5 9.77778 20.9722 7.83333 20.4444 7.55556C19.9167 7.27778 16.2222 7 12 7Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        fill={color}
      />
      <path
        d="M20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Money.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Money.displayName = 'Money';
export default createIcon(Money);
