import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const RotateSmallRight = ({ color, strokeWidth, set }) => {
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
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M16 7V10H13" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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

RotateSmallRight.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

RotateSmallRight.displayName = 'RotateSmallRight';
export default createIcon(RotateSmallRight);
