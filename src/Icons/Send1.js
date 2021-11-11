import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Send1 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M10 14L13 21L20 4L3 11L6.5 12.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4C20 4 16 5 11 7C8.14784 8.14086 5.94647 9.28173 4.58149 10.0514C3.88975 10.4414 3.96687 11.4144 4.69678 11.7272L10 14Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill={color} />
      <path d="M20 4L3 11L10 14L13 21L20 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20 4L3 11L10 14L13 21L20 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
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

Send1.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Send1.displayName = 'Send1';
export default createIcon(Send1);
