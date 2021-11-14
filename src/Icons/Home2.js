import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Home2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M19 10L19 20H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20L5 10L12 3L15.5 6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M18.4384 20C19.3561 20 20.1493 19.3726 20.2725 18.4632C20.3895 17.5988 20.5 16.4098 20.5 15C20.5 12 20.6683 10.1684 17.5 7C16.0386 5.53865 14.4064 4.41899 13.3024 3.74088C12.4978 3.24665 11.5021 3.24665 10.6975 3.74088C9.5935 4.41899 7.96131 5.53865 6.49996 7C3.33157 10.1684 3.49997 12 3.49997 15C3.49997 16.4098 3.61039 17.5988 3.72745 18.4631C3.85061 19.3726 4.64378 20 5.56152 20H18.4384Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 10L12 3L19 10L19 20H5L5 10Z" fill={color} />
      <path d="M4.99999 10L12 3L19 10L19 20H5L4.99999 10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M5 10L12 3L19 10L19 20H5L5 10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Home2.propTypes = {
  props: iconType,
};

Home2.displayName = 'Home2';
export default createIcon(Home2);
