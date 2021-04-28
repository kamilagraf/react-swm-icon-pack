import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Delete = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M9 6h11a1 1 0 011 1v10a1 1 0 01-1 1H9l-6-6 1.5-1.5L6 9m11 0l-6 6m0-6l6 6"
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
        d="M17 9l-6 6m0-6l6 6M9 6l-6 6 6 6s2 .5 5.5.5c5.793 0 7 0 7-6.5s-1.331-6.5-7-6.5C11 5.5 9 6 9 6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M9 6h11a1 1 0 011 1v10a1 1 0 01-1 1H9l-6-6 6-6z" fill={color} />
      <path
        d="M17 9l-6 6m0-6l6 6M9 6h11a1 1 0 011 1v10a1 1 0 01-1 1H9l-6-6 6-6z"
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
        d="M17 9l-6 6m0-6l6 6M9 6h11a1 1 0 011 1v10a1 1 0 01-1 1H9l-6-6 6-6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M17 9l-6 6m0-6l6 6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 6h11a1 1 0 011 1v10a1 1 0 01-1 1H9l-6-6 6-6z"
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
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

Delete.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Delete.displayName = 'SvgDelete';
export default createIcon(Delete);
