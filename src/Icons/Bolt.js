import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Bolt = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M15.7258 4.6857C15.8571 4.35726 15.6152 4 15.2615 4H9.36041C9.14519 4 8.95413 4.13771 8.88607 4.34189L6.2194 12.3419C6.11148 12.6657 6.35246 13 6.69374 13H9.35964C9.68493 13 9.92361 13.3057 9.84471 13.6213L8.43784 19.2487C8.31485 19.7407 8.91789 20.0821 9.27647 19.7236L18.1465 10.8536C18.4615 10.5386 18.2384 10 17.7929 10H14.3385C13.9848 10 13.7429 9.64274 13.8743 9.31431L15.7258 4.6857Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" fill={color} />
      <path d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Bolt.propTypes = {
  props: iconType,
};

Bolt.displayName = 'Bolt';
export default createIcon(Bolt);
