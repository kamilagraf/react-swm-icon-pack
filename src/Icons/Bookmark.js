import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Bookmark = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M18 13v8l-6-6-6 6v-4M18 8V6a2 2 0 00-2-2H8a2 2 0 00-2 2v7"
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
        d="M6 8c0-2.815 2-4 6-4s6 1.185 6 4v11.086c0 .89-1.077 1.337-1.707.707l-3.586-3.586a1 1 0 00-1.414 0l-3.586 3.586c-.63.63-1.707.184-1.707-.707V8z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M6 6a2 2 0 012-2h8a2 2 0 012 2v15l-6-6-6 6V6z" fill={color} />
      <path d="M6 6a2 2 0 012-2h8a2 2 0 012 2v15l-6-6-6 6V6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M6 6a2 2 0 012-2h8a2 2 0 012 2v15l-6-6-6 6V6z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Bookmark.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Bookmark.displayName = 'Bookmark';
export default createIcon(Bookmark);
