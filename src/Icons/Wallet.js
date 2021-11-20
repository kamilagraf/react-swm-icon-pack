import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Wallet = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5H4.61111C3.44518 5 2.5 6.04467 2.5 7.33333V16.6667C2.5 17.9553 3.44518 19 4.61111 19H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 8.5V15.5M17 5H19.3889C20.5548 5 21.5 6.04467 21.5 7.33333V16.6667C21.5 17.9553 20.5548 19 19.3889 19H12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M12 5.5C7.77778 5.5 4.08333 5.86111 3.55556 6.22222C3.16625 6.48859 2.77694 7.93385 2.59946 9.83333C2.53633 10.509 2.5 11.2421 2.5 12C2.5 14.8889 3.02778 17.4167 3.55556 17.7778C4.08333 18.1389 7.77778 18.5 12 18.5C16.2222 18.5 19.9167 18.1389 20.4444 17.7778C20.7556 17.5649 21.0667 16.599 21.2697 15.25C21.4111 14.3108 21.5 13.1858 21.5 12C21.5 11.2421 21.4637 10.509 21.4005 9.83333C21.3649 9.45196 21.3207 9.08889 21.2697 8.75C21.0667 7.40102 20.7556 6.43511 20.4444 6.22222C19.9167 5.86111 16.2222 5.5 12 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.31 9H14.0176C12.351 9 11 10.3431 11 12C11 13.6569 12.351 15 14.0176 15H21.31"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M19.3889 5H4.61111C3.44518 5 2.5 6.04467 2.5 7.33333V16.6667C2.5 17.9553 3.44518 19 4.61111 19H19.3889C20.5548 19 21.5 17.9553 21.5 16.6667V15H14C14 15 11 15 11 12C11 9 14 9 14 9H21.5V7.33333C21.5 6.04467 20.5548 5 19.3889 5Z"
        fill={color}
      />
      <path
        d="M21.5 8.5V15.5M4.61111 19H19.3889C20.5548 19 21.5 17.9553 21.5 16.6667V7.33333C21.5 6.04467 20.5548 5 19.3889 5H4.61111C3.44518 5 2.5 6.04467 2.5 7.33333V16.6667C2.5 17.9553 3.44518 19 4.61111 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M21.5 8.5V15.5M4.61111 19H19.3889C20.5548 19 21.5 17.9553 21.5 16.6667V7.33333C21.5 6.04467 20.5548 5 19.3889 5H4.61111C3.44518 5 2.5 6.04467 2.5 7.33333V16.6667C2.5 17.9553 3.44518 19 4.61111 19Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 12V12.01" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Wallet.propTypes = {
  props: iconType,
};

Wallet.displayName = 'Wallet';
export default createIcon(Wallet);
