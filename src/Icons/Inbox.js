import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Inbox = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M3 12H8.5L10 15H14L16 12H18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 20H19C20.1046 20 21 19.1046 21 18V12L18.2433 4.64888C18.097 4.25857 17.7238 4 17.307 4H6.693C6.27616 4 5.90304 4.25857 5.75667 4.64888L3 12V18C3 19.1046 3.89543 20 5 20H7"
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
        d="M21 12H17.0704C16.4017 12 15.7772 12.3342 15.4063 12.8906L14.5937 14.1094C14.2228 14.6658 13.5983 15 12.9296 15H11.2361C10.4785 15 9.786 14.572 9.44721 13.8944L9.05279 13.1056C8.714 12.428 8.02148 12 7.26393 12H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 18V12L18.4867 5.29775C18.1939 4.51715 17.4477 4 16.614 4H7.386C6.55231 4 5.80607 4.51715 5.51334 5.29775L3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M21 18V12H16L14 15H10L8.5 12H3V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z" fill={color} />
      <path d="M3 12H8.5L10 15H14L16 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 18V12L18.2433 4.64888C18.097 4.25857 17.7238 4 17.307 4H6.693C6.27616 4 5.90304 4.25857 5.75667 4.64888L3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3 12H8.5L10 15H14L16 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 18V12L18.2433 4.64888C18.097 4.25857 17.7238 4 17.307 4H6.693C6.27616 4 5.90304 4.25857 5.75667 4.64888L3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18Z"
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

Inbox.propTypes = {
  props: iconType,
};

Inbox.displayName = 'Inbox';
export default createIcon(Inbox);
