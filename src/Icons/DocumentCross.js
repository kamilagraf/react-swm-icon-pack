import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const DocumentCross = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M13 3H5v2m8-2h1l5 5v1m-6-6v4a2 2 0 002 2h4m0 0v3m0 4v5H5V9m4.5 2.5L12 14m0 0l2.5 2.5M12 14l2.5-2.5M12 14l-2.5 2.5"
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
        d="M14.5 11.5l-5 5m0-5l5 5M13.071 2.53c-.34-.02-.697-.03-1.071-.03-5.735 0-7.5 2.235-7.5 9.5 0 7.265 1.765 9.5 7.5 9.5s7.5-2.235 7.5-9.5a28.92 28.92 0 00-.15-3.167M13.07 2.53v4.304a2 2 0 002 2h4.278M13.072 2.53l6.278 6.304"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 21h14V9h-4a2 2 0 01-2-2V3H5v18z" fill={color} />
      <path
        d="M13 3h1l5 5v1m-6-6H5v18h14V9m-6-6v4c0 1.5.5 2 2 2h4m-4.5 2.5L12 14m0 0l-2.5 2.5M12 14l-2.5-2.5M12 14l2.5 2.5"
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
        d="M13 3h1l5 5v1m-6-6H5v18h14V9m-6-6v4c0 1.5.5 2 2 2h4m-4.5 2.5L12 14m0 0l-2.5 2.5M12 14l-2.5-2.5M12 14l2.5 2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M13 3v4a2 2 0 002 2h4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 11.5l-5 5m0-5l5 5M5 3v18h14V8l-5-5H5z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

DocumentCross.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

DocumentCross.displayName = 'SvgDocumentCross';
export default createIcon(DocumentCross);
