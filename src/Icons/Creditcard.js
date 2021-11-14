import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Creditcard = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 6H19C20.1046 6 21 6.89543 21 8V10V16C21 17.1046 20.1046 18 19 18H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 10H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 15H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M7 14C7 14 8 14 9.5 14C11 14 12 14 12 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.9058 10H3.09424" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 6C8 6 4.5 6.33333 4 6.66667C3.63118 6.91254 3.26237 8.24663 3.09422 10C3.03442 10.6237 3 11.3004 3 12C3 14.6667 3.5 17 4 17.3333C4.5 17.6667 8 18 12 18C16 18 19.5 17.6667 20 17.3333C20.5 17 21 14.6667 21 12C21 11.3004 20.9656 10.6237 20.9058 10C20.7376 8.24663 20.3688 6.91254 20 6.66667C19.5 6.33333 16 6 12 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 18H19C20.1046 18 21 17.1046 21 16V10H3V16C3 17.1046 3.89543 18 5 18Z" fill={color} />
      <path
        d="M19 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V10V8C21 6.89543 20.1046 6 19 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 10H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 15H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M19 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V10V8C21 6.89543 20.1046 6 19 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 10H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 15H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Creditcard.propTypes = {
  props: iconType,
};

Creditcard.displayName = 'Creditcard';
export default createIcon(Creditcard);
