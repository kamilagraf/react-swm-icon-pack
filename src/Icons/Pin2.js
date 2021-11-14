import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Pin2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 9.80001L20 8.00002L16 4.00002L7 9.00002L15 17L17 13.4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 13L4 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M11 13L4 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18 6.00001C20.4537 8.45369 17.9927 12.8732 16.3019 15.2964C15.6377 16.2482 14.3019 16.3019 13.4812 15.4812L8.51882 10.5188C7.69809 9.69811 7.75174 8.36225 8.70361 7.69808C11.1268 6.00734 15.5463 3.54633 18 6.00001Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M16 4.00002L20 8.00002L15 17L7 9.00002L16 4.00002Z" fill={color} />
      <path
        d="M20 8.00002L16 4.00002L7 9.00002L15 17L20 8.00002Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 13L4 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20 8L16 4L7 9L15 17L20 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 12.9999L4.00003 19.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Pin2.propTypes = {
  props: iconType,
};

Pin2.displayName = 'Pin2';
export default createIcon(Pin2);
