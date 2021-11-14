import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const ChevronSmallRight = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M12.5 9.5L10 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 17L15 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M10 17L15 12L10 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M10 17L15 12L10 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M10 17L15 12L10 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ChevronSmallRight.propTypes = {
  props: iconType,
};

ChevronSmallRight.displayName = 'ChevronSmallRight';
export default createIcon(ChevronSmallRight);
