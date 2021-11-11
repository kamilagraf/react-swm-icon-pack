import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Crown2 = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M15.5 12.5L21 8L19 20H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 12.5L12 7L13.9091 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20H5L3 8L6 10.4545" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M22.5 6.5C22.5 7.32843 21.8284 8 21 8C20.1716 8 19.5 7.32843 19.5 6.5C19.5 5.67157 20.1716 5 21 5C21.8284 5 22.5 5.67157 22.5 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5C13.5 6.32843 12.8284 7 12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5C4.5 7.32843 3.82843 8 3 8C2.17157 8 1.5 7.32843 1.5 6.5C1.5 5.67157 2.17157 5 3 5C3.82843 5 4.5 5.67157 4.5 6.5Z"
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
        d="M8.38851 20C6.43315 20 4.76439 18.5863 4.44293 16.6576L3 8L6.75598 11.0731C7.68373 11.8321 9.06623 11.6102 9.70978 10.5989L12 7L14.2902 10.5989C14.9338 11.6102 16.3163 11.8321 17.244 11.0731L21 8L19.5571 16.6576C19.2356 18.5863 17.5668 20 15.6115 20H8.38851Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 6.5C22.5 7.32843 21.8284 8 21 8C20.1716 8 19.5 7.32843 19.5 6.5C19.5 5.67157 20.1716 5 21 5C21.8284 5 22.5 5.67157 22.5 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5C13.5 6.32843 12.8284 7 12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5C4.5 7.32843 3.82843 8 3 8C2.17157 8 1.5 7.32843 1.5 6.5C1.5 5.67157 2.17157 5 3 5C3.82843 5 4.5 5.67157 4.5 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M5 20L3 8L8.5 12.5L12 7L15.5 12.5L21 8L19 20H5Z" fill={color} />
      <path
        d="M19 20H5L3 8L8.5 12.5L12 7L15.5 12.5L21 8L19 20Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 6.5C22.5 7.32843 21.8284 8 21 8C20.1716 8 19.5 7.32843 19.5 6.5C19.5 5.67157 20.1716 5 21 5C21.8284 5 22.5 5.67157 22.5 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5C13.5 6.32843 12.8284 7 12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5C4.5 7.32843 3.82843 8 3 8C2.17157 8 1.5 7.32843 1.5 6.5C1.5 5.67157 2.17157 5 3 5C3.82843 5 4.5 5.67157 4.5 6.5Z"
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
        d="M19 20H5L3 8L8.5 12.5L12 7L15.5 12.5L21 8L19 20Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 6.5C22.5 7.32843 21.8284 8 21 8C20.1716 8 19.5 7.32843 19.5 6.5C19.5 5.67157 20.1716 5 21 5C21.8284 5 22.5 5.67157 22.5 6.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.5C13.5 6.32843 12.8284 7 12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5C4.5 7.32843 3.82843 8 3 8C2.17157 8 1.5 7.32843 1.5 6.5C1.5 5.67157 2.17157 5 3 5C3.82843 5 4.5 5.67157 4.5 6.5Z"
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
    default:
      return <Outline />;
  }
};

Crown2.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Crown2.displayName = 'Crown2';
export default createIcon(Crown2);
