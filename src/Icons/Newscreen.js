import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Newscreen = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M19.9999 4L9.99994 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.9999 4.00002L20 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4.00009L17 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14V20L12 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4.00002H4V20L7 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M21.0001 8.99999V2.99998H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.0001 2.99998L9.99997 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.0001 2.99998C8.00006 2.99998 4.50006 3.49998 4.00006 3.99998C3.50006 4.49998 3.00006 7.99998 3.00006 12C3.00006 16 3.50006 19.5 4.00006 20C4.50006 20.5 8.00006 21 12.0001 21C16.0001 21 19.5001 20.5 20.0001 20C20.5001 19.5 21.0001 16 21.0001 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M19.9999 4L9.99994 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10L19.9999 4.00001L14 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4.00001H4V20H20V14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M19.9999 4.00001L9.99994 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10L19.9999 4.00001L14 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4.00001H4V20H20V14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Newscreen.propTypes = {
  props: iconType,
};

Newscreen.displayName = 'Newscreen';
export default createIcon(Newscreen);
