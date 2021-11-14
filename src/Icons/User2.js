import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const User2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3.22302 10C3.07706 10.6432 3 11.3126 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M15 15C16.8283 15 18 17.0886 18 18.7083" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 18.7083C6 17.0886 7.17172 15 9 15L11 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <g opacity="0.15">
        <path
          d="M12.0504 20.9999C12.0336 21 12.0168 21 12 21C11.9832 21 11.9664 21 11.9496 20.9999C11.9666 20.9832 11.9834 20.9664 12 20.9495C12.0166 20.9664 12.0334 20.9832 12.0504 20.9999Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9936 18.7141C17.9978 18.6433 18 18.5719 18 18.5C18 16.567 16.433 15 14.5 15H9.5C7.567 15 6 16.567 6 18.5C6 18.5719 6.00217 18.6433 6.00644 18.7141C4.16145 17.0659 3 14.6686 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.6686 19.8385 17.0659 17.9936 18.7141ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
          fill={color}
        />
      </g>
      <path
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M6 18.7083C6 17.0886 7.17172 15 9 15H15C16.8283 15 18 17.0886 18 18.7083" stroke={color} strokeWidth={strokeWidth} />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M6 18.7083C6 17.0886 7.17172 15 9 15H15C16.8283 15 18 17.0886 18 18.7083" stroke={color} strokeWidth={strokeWidth} />
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

User2.propTypes = {
  props: iconType,
};

User2.displayName = 'User2';
export default createIcon(User2);
