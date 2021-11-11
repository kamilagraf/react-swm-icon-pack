import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const RotateCircleRight = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 7V10H13" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 7V10H13" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
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
        d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 7V10H13" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 7V10H13" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
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

RotateCircleRight.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RotateCircleRight.displayName = 'RotateCircleRight';
export default createIcon(RotateCircleRight);
