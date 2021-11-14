import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const RotateCircleLeft = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7V10H11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7V10H11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
      <path
        d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7V10H11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7V10H11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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

RotateCircleLeft.propTypes = {
  props: iconType,
};

RotateCircleLeft.displayName = 'RotateCircleLeft';
export default createIcon(RotateCircleLeft);
