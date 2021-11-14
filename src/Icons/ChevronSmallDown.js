import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const ChevronSmallDown = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9.5 12.5L7 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 10L12 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M7 10L12 15L17 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M7 10L12 15L17 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M7 10L12 15L17 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ChevronSmallDown.propTypes = {
  props: iconType,
};

ChevronSmallDown.displayName = 'ChevronSmallDown';
export default createIcon(ChevronSmallDown);
