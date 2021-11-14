import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const LockOn = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 11V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 21H5V11H8H16H19V21H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M16 10.4298V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10.4298"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C10.3247 10 9.01243 10.1268 8 10.4298C5.77744 11.0952 5 12.6104 5 15.5C5 19.7059 6.64706 21 12 21C17.3529 21 19 19.7059 19 15.5C19 12.6104 18.2226 11.0952 16 10.4298C14.9876 10.1268 13.6753 10 12 10Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 11H19V21H5V11Z" fill={color} />
      <path
        d="M8 11V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 21H5V11H8H16H19V21Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8 11V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 21H5V11H8H16H19V21Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

LockOn.propTypes = {
  props: iconType,
};

LockOn.displayName = 'LockOn';
export default createIcon(LockOn);
