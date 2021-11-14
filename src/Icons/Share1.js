import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Share1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M8.68445 10.6578L13 8.50003" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M15.3157 16.6578L11 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M8.68439 10.6578L15.3124 7.34378" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M15.3156 16.6578L8.69379 13.3469" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.2">
        <path
          d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
          fill={color}
        />
        <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill={color} />
        <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill={color} />
      </g>
      <path
        d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M8.68439 10.6578L15.3124 7.34378" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M15.3156 16.6578L8.6938 13.3469" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M8.68439 10.6578L15.3125 7.34375" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M15.3156 16.6578L8.6938 13.3469" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
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

Share1.propTypes = {
  props: iconType,
};

Share1.displayName = 'Share1';
export default createIcon(Share1);
