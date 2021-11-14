import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Mail = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M14 19H4C3.44772 19 3 18.5523 3 18V6C3 5.72386 3.11193 5.47386 3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289C20.8881 5.47386 21 5.72386 21 6V18C21 18.5523 20.5523 19 20 19H18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.29285 5.29291L5 7.00006" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.7071 5.29285L13.4142 12.5857C12.6331 13.3668 11.3668 13.3668 10.5857 12.5857L8 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M2.5 12C2.5 17.7353 4.73529 19.5 12 19.5C19.2647 19.5 21.5 17.7353 21.5 12C21.5 9.28823 21.0003 7.46413 19.7055 6.29452C18.2618 4.99044 15.8298 4.5 12 4.5C8.1702 4.5 5.73816 4.99044 4.29452 6.29452C2.99972 7.46413 2.5 9.28823 2.5 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7055 6.29449L13.4142 12.5858C12.6331 13.3668 11.3668 13.3668 10.5858 12.5858L4.29449 6.29449"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M21 18V6.00001C21 5.72387 20.8881 5.47387 20.7071 5.29291L20.5 5.50001L13.4142 12.5858C12.6332 13.3668 11.3668 13.3668 10.5858 12.5858L3.5 5.50001L3.29289 5.29291C3.11193 5.47387 3 5.72387 3 6.00001V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18Z"
        fill={color}
      />
      <path
        d="M20 5H4C3.72386 5 3.47386 5.11193 3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289C20.5261 5.11193 20.2761 5 20 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.29289 5.29291L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L20.7071 5.29291"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M20 5H4C3.72386 5 3.47386 5.11193 3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289C20.5261 5.11193 20.2761 5 20 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.29289 5.29285L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29285"
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

Mail.propTypes = {
  props: iconType,
};

Mail.displayName = 'Mail';
export default createIcon(Mail);
