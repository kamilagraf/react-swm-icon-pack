import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Edit4 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M14 6L18 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14L20 20L12 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4L4 4L4 20L7 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 11L18 10L21 7L17 3L14 6L8 12V16H12L14.5 13.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M14.9445 5.1875L18.9445 9.1875" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.9444 5.1875L9.946 10.1859C9.28735 10.8446 8.76731 11.6441 8.609 12.562C8.44915 13.4888 8.39595 14.639 8.94444 15.1875C9.49294 15.736 10.6431 15.6828 11.5699 15.5229C12.4878 15.3646 13.2873 14.8446 13.946 14.1859L18.9444 9.1875C18.9444 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9444 5.1875 14.9444 5.1875Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M8 16H12L18 10L14 6L8 12V16Z" fill={color} />
      <path d="M21 7L17 3L14 6L8 12V16H12L18 10L21 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6L18 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4L4 4L4 20L20 20L20 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M21 7L17 3L14 6L8 12V16H12L18 10L21 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6L18 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4L4 4L4 20L20 20L20 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Edit4.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Edit4.displayName = 'Edit4';
export default createIcon(Edit4);
