import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Cast = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path id="shape" d="M3 8V5H21V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path id="shape_2" d="M14 19H21V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path id="shape_3" d="M7 19C7 16.7909 5.20914 15 3 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_4" d="M11 19C11 14.5817 7.41828 11 3 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_5" d="M3 18.99V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path id="shape" d="M3 8V5H21V19H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path id="shape_2" d="M7 19C7 16.7909 5.20914 15 3 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_3" d="M11 19C11 14.5817 7.41828 11 3 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_4" d="M3 18.99V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path id="shape" d="M3 8V5H21V19H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path id="shape_2" d="M7 19C7 16.7909 5.20914 15 3 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_3" d="M11 19C11 14.5817 7.41828 11 3 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_4" d="M3 18.99V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path id="shape" d="M3 8V5H21V19H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path id="shape_2" d="M7 19C7 16.7909 5.20914 15 3 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_3" d="M11 19C11 14.5817 7.41828 11 3 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path id="shape_4" d="M3 18.99V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Cast.propTypes = {
  props: iconType,
};

Cast.displayName = 'Cast';
export default createIcon(Cast);
