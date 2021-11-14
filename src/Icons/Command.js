import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Command = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M15 15V9H9V15H12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path
        d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9 9H6C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 9H15V15H9V9Z" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" fill={color} />
        <path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" fill={color} />
        <path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" fill={color} />
        <path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" fill={color} />
      </g>
      <path d="M9 9H15V15H9V9Z" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 9H15V15H9V9Z" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" stroke={color} strokeWidth={strokeWidth} />
      <path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={color} strokeWidth={strokeWidth} />
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

Command.propTypes = {
  props: iconType,
};

Command.displayName = 'Command';
export default createIcon(Command);
