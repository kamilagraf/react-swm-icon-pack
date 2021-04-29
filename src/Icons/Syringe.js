import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Syringe = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M5.343 18.657l-2.121 2.121M18.778 5.222l-2.121 2.121m2.121-2.121L16.657 3.1m2.121 2.12l2.121 2.122M6.757 13l-1.414 1.414 4.243 4.243L15 13.243m-5.5-2.986l5.036-5.035 4.242 4.242L17.243 11M6.05 15.121L8.88 17.95 6.757 20.07 3.93 17.243l1.06-1.06L6.05 15.12z"
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
        d="M5.343 18.657l-2.12 2.121M18.777 5.222l-2.121 2.121m2.121-2.121L16.657 3.1m2.121 2.12L20.9 7.344M5.965 15.035v0a.878.878 0 010-1.242l7.157-7.157a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.829l-7.156 7.156a.879.879 0 01-1.243 0v0m-3-3l3 3m-3-3l-.734.796a2 2 0 00.056 2.77l.112.112a2 2 0 002.77.056l.796-.734"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M14.536 5.222l4.242 4.242-9.192 9.193-4.243-4.243 9.193-9.192z" fill={color} />
      <path
        d="M5.343 18.657l-2.121 2.121M18.778 5.222l-2.121 2.121m2.121-2.121L16.657 3.1m2.121 2.12l2.121 2.122m-6.363-2.121l4.242 4.242-9.192 9.193-4.243-4.243 9.193-9.192zm-8.486 9.9L8.88 17.95 6.757 20.07 3.93 17.243 6.05 15.12z"
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
        d="M5.343 18.657l-2.121 2.121M18.778 5.222l-2.121 2.121m2.121-2.121L16.657 3.1m2.121 2.12l2.121 2.122m-6.363-2.121l4.242 4.242-9.192 9.193-4.243-4.243 9.193-9.192zm-8.486 9.9L8.88 17.95 6.757 20.07 3.93 17.243 6.05 15.12z"
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
        d="M6.05 15.121l-2.121 2.122 2.828 2.828 2.121-2.121m-3.535.707l-2.121 2.121M18.778 5.222l-2.121 2.121m2.12-2.121L16.658 3.1m2.12 2.12L20.9 7.344"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05 15.121L8.88 17.95m5.657-12.728l4.242 4.242-9.192 9.193-4.243-4.243 9.193-9.192z"
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

Syringe.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Syringe.displayName = 'SvgSyringe';
export default createIcon(Syringe);
