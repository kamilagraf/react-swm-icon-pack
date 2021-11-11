import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const CamDisabled = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 8V11M14 18.5H4C3.44772 18.5 3 18.0523 3 17.5V16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5.5H15C15.5523 5.5 16 5.94772 16 6.5V9V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 17V7L18.5 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M16.8772 9L21 7C21 7 21.5 9 21.5 12C21.5 15 21 17 21 17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5C13.1111 5 15.8333 5.38889 16.2222 5.77778C16.477 6.03256 16.7318 7.28891 16.8772 9C16.9538 9.9006 17 10.9272 17 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.22627 8C3.08981 9.09966 3 10.5049 3 12C3 15.1111 3.38889 17.8333 3.77778 18.2222C4.16667 18.6111 6.88889 19 10 19C11.4951 19 12.9003 18.9102 14 18.7737"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M3 8V17.5C3 18.0523 3.44772 18.5 4 18.5H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5.5H15C15.5523 5.5 16 5.94772 16 6.5V9V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 17V7L16 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M3 8V17.5C3 18.0523 3.44772 18.5 4 18.5H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5.5H15C15.5523 5.5 16 5.94772 16 6.5V9V11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 17V7L16 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

CamDisabled.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

CamDisabled.displayName = 'CamDisabled';
export default createIcon(CamDisabled);
