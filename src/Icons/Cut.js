import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Cut = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M6.5 16A2.5 2.5 0 109 18.5L17 3m.5 13a2.5 2.5 0 11-2.5 2.5L7 3"
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
        d="M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0L17 3m-2 15.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0 0L7 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill={color} opacity={0.15} />
      <path
        d="M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0L17 3m-2 15.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0 0L7 3"
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
        d="M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0L17 3m-2 15.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0 0L7 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M9 18.5L17 3m-2 15.5L7 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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

Cut.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cut.displayName = 'SvgCut';
export default createIcon(Cut);
