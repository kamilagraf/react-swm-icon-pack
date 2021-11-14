import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Fullscreen = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9.00002 3.99998L4.00004 3.99999L4 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 8.99999L20 4L15 3.99997" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 20L20 20L20 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 15L4 20L9.00002 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M9.00002 3.99998L4.00004 3.99999L4 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 8.99999L20 4L15 3.99997" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 20L20 20L20 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 15L4 20L9.00002 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9.00002 3.99997L4.00004 3.99997L4 8.99999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 8.99999L20 4L15 3.99997" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 20L20 20L20 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 15L4 20L9.00002 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Fullscreen.propTypes = {
  props: iconType,
};

Fullscreen.displayName = 'Fullscreen';
export default createIcon(Fullscreen);
