import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Basketball = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M4.753 6.662A8.96 8.96 0 003 12a8.96 8.96 0 001.744 5.326A8.987 8.987 0 0012 21a8.987 8.987 0 007.237-3.65A8.96 8.96 0 0021 12a8.959 8.959 0 00-1.743-5.324A8.987 8.987 0 0012 3a8.987 8.987 0 00-7.247 3.662z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.257 6.676c-1.226.799-2.225 1.64-2.8 3.028a6 6 0 000 4.592c.579 1.398 1.588 2.201 2.78 3.055M4.753 6.662c1.226.766 2.227 1.681 2.79 3.042a6 6 0 010 4.592c-.575 1.389-1.574 2.229-2.799 3.03M8 12H3M21 12h-9M12 17V3"
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
        d="M4.753 6.662A8.96 8.96 0 003 12a8.96 8.96 0 001.744 5.326A8.987 8.987 0 0012 21a8.987 8.987 0 007.237-3.65A8.96 8.96 0 0021 12a8.959 8.959 0 00-1.743-5.324A8.987 8.987 0 0012 3a8.987 8.987 0 00-7.247 3.662z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.257 6.676c-1.226.799-2.225 1.64-2.8 3.028a6 6 0 000 4.592c.579 1.398 1.588 2.201 2.78 3.055M4.753 6.662c1.226.766 2.227 1.681 2.79 3.042a6 6 0 010 4.592c-.575 1.389-1.574 2.229-2.799 3.03M21 12H3M12 21V3"
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
        opacity={0.15}
        d="M19.25 6.666A6 6 0 0016 12a6 6 0 003.25 5.334A8.987 8.987 0 0112 21a8.987 8.987 0 01-7.25-3.666A6 6 0 008 12a6 6 0 00-3.25-5.334A8.987 8.987 0 0112 3a8.987 8.987 0 017.25 3.666z"
        fill={color}
      />
      <path
        d="M4.753 6.662A8.96 8.96 0 003 12a8.96 8.96 0 001.744 5.326A8.987 8.987 0 0012 21a8.987 8.987 0 007.237-3.65A8.96 8.96 0 0021 12a8.959 8.959 0 00-1.743-5.324A8.987 8.987 0 0012 3a8.987 8.987 0 00-7.247 3.662z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.257 6.676c-1.226.799-2.225 1.64-2.8 3.028a6 6 0 000 4.592c.579 1.398 1.588 2.201 2.78 3.055M4.753 6.662c1.226.766 2.226 1.681 2.79 3.042a6 6 0 010 4.592c-.575 1.389-1.574 2.229-2.799 3.03M21 12H3M12 21V3"
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
        d="M4.753 6.662A8.96 8.96 0 003 12a8.96 8.96 0 001.744 5.326A8.987 8.987 0 0012 21a8.987 8.987 0 007.237-3.65A8.96 8.96 0 0021 12a8.959 8.959 0 00-1.743-5.324A8.987 8.987 0 0012 3a8.987 8.987 0 00-7.247 3.662z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.257 6.676c-1.226.799-2.225 1.64-2.8 3.028a6 6 0 000 4.592c.579 1.398 1.588 2.201 2.78 3.055M4.753 6.662c1.226.766 2.227 1.681 2.79 3.042a6 6 0 010 4.592c-.575 1.389-1.574 2.229-2.799 3.03M21 12H3M12 21V3"
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

Basketball.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Basketball.displayName = 'Basketball';
export default createIcon(Basketball);
