import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Filters3 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 12L4 4H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4L15 12V21L9 18V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M7.60848 4C6.03761 4 5.07993 5.7279 5.91249 7.06L8.08798 10.5408C8.68397 11.4944 8.99999 12.5963 8.99999 13.7208V16.7639C8.99999 17.5215 9.42799 18.214 10.1056 18.5528L13.5528 20.2764C14.2177 20.6088 15 20.1253 15 19.382V13.7208C15 12.5963 15.316 11.4944 15.912 10.5408L18.0875 7.06C18.9201 5.7279 17.9624 4 16.3915 4H7.60848Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M4 4L9 12V18L15 21V12L20 4H4Z" fill={color} />
      <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Filters3.propTypes = {
  props: iconType,
};

Filters3.displayName = 'Filters3';
export default createIcon(Filters3);
