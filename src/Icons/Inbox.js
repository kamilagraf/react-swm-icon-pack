import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Inbox = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 12v6a2 2 0 002 2h2m-4-8l2.757-7.351A1 1 0 016.693 4h10.614a1 1 0 01.936.649L21 12v6a2 2 0 01-2 2h-8m-8-8h5.5l1.5 3h4l2-3h2"
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
        d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0l-2.513-6.702A2 2 0 0016.614 4H7.386a2 2 0 00-1.873 1.298L3 12m18 0h-3.93a2 2 0 00-1.664.89l-.812 1.22a2 2 0 01-1.664.89h-1.694a2 2 0 01-1.789-1.106l-.394-.788A2 2 0 007.263 12H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 18v-6h-5l-2 3h-4l-1.5-3H3v6a2 2 0 002 2h14a2 2 0 002-2z" fill={color} />
      <path
        d="M3 12v6a2 2 0 002 2h14a2 2 0 002-2v-6M3 12l2.757-7.351A1 1 0 016.693 4h10.614a1 1 0 01.936.649L21 12M3 12h5.5l1.5 3h4l2-3h5"
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
        d="M3 12v6a2 2 0 002 2h14a2 2 0 002-2v-6M3 12l2.757-7.351A1 1 0 016.693 4h10.614a1 1 0 01.936.649L21 12M3 12h5.5l1.5 3h4l2-3h5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M3 12h5.5l1.5 3h4l2-3h5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 12l2.757-7.351A1 1 0 016.693 4h10.614a1 1 0 01.936.649L21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z"
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

Inbox.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Inbox.displayName = 'Inbox';
export default createIcon(Inbox);
