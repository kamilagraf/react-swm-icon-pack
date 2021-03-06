import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const UndoCircle = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M17 13C16.5367 11.9961 15.7497 11.1655 14.7576 10.6333C13.7655 10.1011 12.622 9.89624 11.4994 10.0495C9.66479 10.3 8.38607 11.6116 7 12.8186"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 10V13H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M17 13C16.5367 11.9961 15.7497 11.1655 14.7576 10.6333C13.7655 10.1011 12.622 9.89624 11.4994 10.0495C9.66479 10.3 8.38607 11.6116 7 12.8186"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 10V13H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
      <path
        d="M17 13C16.5367 11.9961 15.7497 11.1655 14.7576 10.6333C13.7655 10.1011 12.622 9.89624 11.4994 10.0495C9.66479 10.3 8.38607 11.6116 7 12.8186"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 10V13H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M17 13C16.5367 11.9961 15.7497 11.1655 14.7576 10.6333C13.7655 10.1011 12.622 9.89624 11.4994 10.0495C9.66479 10.3 8.38607 11.6116 7 12.8186"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 10V13H10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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

UndoCircle.propTypes = {
  props: iconType,
};

UndoCircle.displayName = 'UndoCircle';
export default createIcon(UndoCircle);
