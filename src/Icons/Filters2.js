import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Filters2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M14 5a2 2 0 10-4 0 2 2 0 004 0zm0 0h6m-4 7a2 2 0 104 0 2 2 0 00-4 0zm0 0h-3m7 7h-9m-7-7h6M4 5h3M6 17a2 2 0 110 4 2 2 0 010-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M14 5a2 2 0 10-4 0m4 0a2 2 0 11-4 0m4 0h6M10 5H4m12 7a2 2 0 104 0 2 2 0 00-4 0zm0 0H4m4 7a2 2 0 10-4 0 2 2 0 004 0zm0 0h12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M12 3a2 2 0 110 4 2 2 0 010-4zM18 10a2 2 0 110 4 2 2 0 010-4zM6 17a2 2 0 110 4 2 2 0 010-4z" opacity={0.15} fill={color} />
      <path
        d="M14 5a2 2 0 10-4 0m4 0a2 2 0 11-4 0m4 0h6M10 5H4m12 7a2 2 0 104 0 2 2 0 00-4 0zm0 0H4m4 7a2 2 0 10-4 0 2 2 0 004 0zm0 0h12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M14 5a2 2 0 10-4 0m4 0a2 2 0 11-4 0m4 0h6M10 5H4m12 7a2 2 0 104 0 2 2 0 00-4 0zm0 0H4m4 7a2 2 0 10-4 0 2 2 0 004 0zm0 0h12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M14 5h6M10 5H4m12 7H4m4 7h12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 3a2 2 0 110 4 2 2 0 010-4zM18 10a2 2 0 110 4 2 2 0 010-4zM6 17a2 2 0 110 4 2 2 0 010-4z"
        stroke={secondaryColor}
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

Filters2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Filters2.displayName = 'Filters2';
export default createIcon(Filters2);
