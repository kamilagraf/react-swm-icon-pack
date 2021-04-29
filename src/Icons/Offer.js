import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Offer = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 3a9 9 0 106 2.292M8 16l8-8m-5 1a2 2 0 11-4 0 2 2 0 014 0zm6 6a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M8 16l8-8m5 4a9 9 0 11-18 0 9 9 0 0118 0zM11 9a2 2 0 11-4 0 2 2 0 014 0zm6 6a2 2 0 11-4 0 2 2 0 014 0z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM9 11a2 2 0 100-4 2 2 0 000 4zm6 6a2 2 0 100-4 2 2 0 000 4z"
        fill={color}
      />
      <path
        d="M8 16l8-8m5 4a9 9 0 11-18 0 9 9 0 0118 0zM11 9a2 2 0 11-4 0 2 2 0 014 0zm6 6a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M8 16l8-8m5 4a9 9 0 11-18 0 9 9 0 0118 0zM11 9a2 2 0 11-4 0 2 2 0 014 0zm6 6a2 2 0 11-4 0 2 2 0 014 0z"
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
        d="M11 9a2 2 0 11-4 0 2 2 0 014 0zM17 15a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 16l8-8m5 4a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Offer.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Offer.displayName = 'SvgOffer';
export default createIcon(Offer);
