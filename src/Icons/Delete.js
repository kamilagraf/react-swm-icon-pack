import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Delete = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M2 12L8 18C8 18 10 18.5 13.5 18.5C19.2925 18.5 20.5 18.5 20.5 12C20.5 5.5 19.1685 5.5 13.5 5.5C10 5.5 8 6 8 6L2 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 9L10 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.0002 9L16.0002 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M3 12L9 18C9 18 11 18.5 14.5 18.5C20.2925 18.5 21.5 18.5 21.5 12C21.5 5.5 20.1685 5.5 14.5 5.5C11 5.5 9 6 9 6L3 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 9L11 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.0002 9L17.0002 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M9 6H20C20.5523 6 21 6.44772 21 7V17C21 17.5523 20.5523 18 20 18H9L3 12L9 6Z" fill={color} />
      <path
        d="M20 6H9L3 12L9 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 9L11 15M11.0002 9L17.0002 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M19 6H8L2 12L8 18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 9L10 15M10.0002 9L16.0002 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Delete.propTypes = {
  props: iconType,
};

Delete.displayName = 'Delete';
export default createIcon(Delete);
