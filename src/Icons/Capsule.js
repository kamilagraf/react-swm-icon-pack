import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Capsule = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M8.42892 8.57104L12.8579 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.9645 5.03551C13.9171 3.08289 17.0829 3.08289 19.0356 5.03551C20.9882 6.98813 20.9882 10.154 19.0356 12.1066L15.5 15.6421L11.9645 19.1776C10.0119 21.1303 6.84604 21.1303 4.89342 19.1776C2.9408 17.225 2.9408 14.0592 4.89342 12.1066L8.42896 8.57104L9.5 7.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M8.42896 8.57104L15.5 15.6421" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z"
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
        d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L8.42896 8.57104Z"
        fill={color}
      />
      <path d="M8.42896 8.57104L15.5 15.6421" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8.42896 8.57104L15.5 15.6421" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z"
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

Capsule.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Capsule.displayName = 'Capsule';
export default createIcon(Capsule);
