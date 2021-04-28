import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const UndoCircle = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 10v3m0 0h3m-3 0l1.534-1.519a5.098 5.098 0 012.965-1.593M17 13c-.463-1.116-1.25-1.872-2.242-2.463M14 3.223A9 9 0 1018.708 6"
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
        d="M7 10v3m0 0h3m-3 0l1.534-1.519a5.098 5.098 0 012.965-1.593 4.908 4.908 0 013.259.649c.992.591 1.779 1.347 2.242 2.463m4-1a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
      <path
        d="M7 10v3m0 0h3m-3 0l1.534-1.519a5.098 5.098 0 012.965-1.593 4.908 4.908 0 013.259.649c.992.591 1.779 1.347 2.242 2.463m4-1a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M7 10v3m0 0h3m-3 0l1.534-1.519a5.098 5.098 0 012.965-1.593 4.908 4.908 0 013.259.649c.992.591 1.779 1.347 2.242 2.463m4-1a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path
        d="M7 10v3m0 0h3m-3 0l1.534-1.519a5.098 5.098 0 012.965-1.593 4.908 4.908 0 013.259.649c.992.591 1.779 1.347 2.242 2.463"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

UndoCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

UndoCircle.displayName = 'SvgUndoCircle';
export default createIcon(UndoCircle);
