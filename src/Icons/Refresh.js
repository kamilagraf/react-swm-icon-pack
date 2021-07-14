import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Refresh = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 3v3m6 3H3l2.64-2.37a9 9 0 0114.574 2.692M21 21v-3m-6-3h6l-2.64 2.37a9 9 0 01-14.574-2.692"
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
        d="M3 3v6m0 0h6M3 9l2.64-2.37a9 9 0 0114.574 2.692M21 21v-6m0 0h-6m6 0l-2.64 2.37a9 9 0 01-14.574-2.692"
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
        d="M3 3v6m0 0h6M3 9l2.64-2.37a9 9 0 0114.574 2.692M21 21v-6m0 0h-6m6 0l-2.64 2.37a9 9 0 01-14.574-2.692"
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
        d="M3 3v6m0 0h6M3 9l2.64-2.37a9 9 0 0114.574 2.692M21 21v-6m0 0h-6m6 0l-2.64 2.37a9 9 0 01-14.574-2.692"
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
        d="M3 9l2.64-2.37a9 9 0 0114.574 2.692M21 15l-2.64 2.37a9 9 0 01-14.574-2.692"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3v6h6m12 12v-6h-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Refresh.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Refresh.displayName = 'Refresh';
export default createIcon(Refresh);
