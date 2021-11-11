import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const HomeHospital = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M19 10L19 20H5M15.5 6.5L12 3L5 10V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M6.50008 6.99997C7.96143 5.53862 9.59363 4.41896 10.6976 3.74084C11.5022 3.24662 12.498 3.24662 13.3026 3.74085C14.4065 4.41896 16.0387 5.53862 17.5001 6.99997C20.6685 10.1683 20.5001 12 20.5001 15C20.5001 16.4098 20.3897 17.5988 20.2726 18.4631C20.1494 19.3726 19.3563 20 18.4385 20H5.56164C4.64391 20 3.85074 19.3725 3.72757 18.4631C3.61051 17.5988 3.50009 16.4098 3.50009 15C3.50009 12 3.33169 10.1684 6.50008 6.99997Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 10V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 10L12 3L19 10L19 20H5L5 10Z" fill={color} />
      <path d="M5 10L12 3L19 10L19 20H5L5 10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M5 10L12 3L19 10L19 20H5L5 10Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

HomeHospital.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

HomeHospital.displayName = 'HomeHospital';
export default createIcon(HomeHospital);
