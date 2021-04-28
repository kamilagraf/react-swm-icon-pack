import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Star1 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 17l-6 3 1.5-6L3 9l6.5-.5L10.636 6M12 3l2.5 5.5L21 9l-4.5 5 1.5 6-3-1.5"
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
        d="M12.447 17.224a1 1 0 00-.894 0l-3.608 1.804a1 1 0 01-1.418-1.137l.844-3.375a1 1 0 00-.227-.911L4.36 10.51a1 1 0 01.667-1.666l3.885-.299a1 1 0 00.834-.583l1.345-2.96c.355-.78 1.465-.78 1.82 0l1.346 2.96a1 1 0 00.833.583l3.885.3a1 1 0 01.667 1.665l-2.785 3.095a1 1 0 00-.227.911l.844 3.375a1 1 0 01-1.418 1.137l-3.608-1.804z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 17l-6 3 1.5-6L3 9l6.5-.5L12 3l2.5 5.5L21 9l-4.5 5 1.5 6-6-3z" fill={color} />
      <path
        d="M12 17l-6 3 1.5-6L3 9l6.5-.5L12 3l2.5 5.5L21 9l-4.5 5 1.5 6-6-3z"
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
        d="M12 17l-6 3 1.5-6L3 9l6.5-.5L12 3l2.5 5.5L21 9l-4.5 5 1.5 6-6-3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 3l2.5 5.5L21 9l-4.5 5 1.5 6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3L9.5 8.5 3 9l4.5 5L6 20l6-3 6 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

Star1.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Star1.displayName = 'SvgStar1';
export default createIcon(Star1);
