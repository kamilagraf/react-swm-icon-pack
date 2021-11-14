import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Play = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 18V6L18 12L11.3333 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M7.5 6C7.5 6 7 8 7 12C7 16 7.5 18 7.5 18C7.5 18 9.5 17.5 13 15.5C16.5 13.5 17.5 12 17.5 12C17.5 12 16.5 10.5 13 8.5C9.5 6.5 7.5 6 7.5 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M8 6V18L18 12L8 6Z" fill={color} />
      <path d="M8 6V18L18 12L8 6Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8 6V18L18 12L8 6Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
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

Play.propTypes = {
  props: iconType,
};

Play.displayName = 'Play';
export default createIcon(Play);
