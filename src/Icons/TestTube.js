import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const TestTube = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M17.1421 11.4853L11 12.9027" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.7782 3L9.71753 4.06066L11.6569 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 10.7782L4.06066 9.71751L7.94975 13.6066L13.6066 19.2635C15.1687 20.8256 17.7014 20.8256 19.2635 19.2635C20.8256 17.7014 20.8256 15.1687 19.2635 13.6066L17.1421 11.4853L14.6569 9"
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
        d="M8.05023 13.7071C9.46445 12.2929 11.2448 13.4589 12.9999 12.5C14.9413 11.4394 16.182 11.9394 17.2426 11.5858"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7782 3C10.1924 3.58579 10.1924 4.53553 10.7782 5.12132L19.2635 13.6066C20.8256 15.1687 20.8256 17.7014 19.2635 19.2635C17.7014 20.8256 15.1687 20.8256 13.6066 19.2635L5.12132 10.7782C4.53553 10.1924 3.58579 10.1924 3 10.7782"
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
        d="M13.6969 19.3538C15.2647 20.9215 17.8019 20.9261 19.364 19.364C20.9261 17.8019 20.9215 15.2646 19.3538 13.6969L17.2427 11.5858C16.182 11.9394 14.9414 11.4394 13 12.5C11.2449 13.4589 9.46451 12.2929 8.05029 13.7071L13.6969 19.3538Z"
        fill={color}
      />
      <path d="M7.94971 13.6066L17.1421 11.4853" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 10.7782L4.06066 9.71751L7.94975 13.6066L13.6066 19.2635C15.1687 20.8256 17.7014 20.8256 19.2635 19.2635C20.8256 17.7014 20.8256 15.1687 19.2635 13.6066L17.1421 11.4853L9.71751 4.06066L10.7782 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M7.94977 13.6067L17.1422 11.4854" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 10.7782L4.06066 9.71751L7.94975 13.6066L13.6066 19.2635C15.1687 20.8256 17.7014 20.8256 19.2635 19.2635C20.8256 17.7014 20.8256 15.1687 19.2635 13.6066L17.1421 11.4853L9.71751 4.06066L10.7782 3"
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

TestTube.propTypes = {
  props: iconType,
};

TestTube.displayName = 'TestTube';
export default createIcon(TestTube);
