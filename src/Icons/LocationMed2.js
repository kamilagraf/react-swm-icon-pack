import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const LocationMed2 = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 17c-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222c0 2.264-1.165 4.245-2.908 5.778M12 21c4.97 0 9-1.79 9-4 0-.953-.75-1.827-2-2.514m-14 0c-1.25.687-2 1.561-2 2.514 0 1.57 2.037 2.93 5 3.584M12 6.5v5M9.5 9h.5m4.5 0H12"
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
        d="M5 14.486c-1.25.687-2 1.561-2 2.514 0 2.21 4.03 4 9 4s9-1.79 9-4c0-.953-.75-1.827-2-2.514M12 6.5v5M9.5 9h5m3.5.222c0 3.142-2.246 5.74-5.164 7.352a1.73 1.73 0 01-1.672 0C8.246 14.962 6 12.364 6 9.222 6 5.786 8.686 3 12 3s6 2.786 6 6.222z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M18 9.222c0 3.437-2.686 6.222-6 7.778-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222z" fill={color} />
      <path
        d="M5 14.486c-1.25.687-2 1.561-2 2.514 0 2.21 4.03 4 9 4s9-1.79 9-4c0-.953-.75-1.827-2-2.514M12 6.5v5M9.5 9h5m3.5.222c0 3.437-2.686 6.222-6 7.778-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222z"
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
        d="M5 14.486c-1.25.687-2 1.561-2 2.514 0 2.21 4.03 4 9 4s9-1.79 9-4c0-.953-.75-1.827-2-2.514M12 6.5v5M9.5 9h5m3.5.222c0 3.437-2.686 6.222-6 7.778-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222z"
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
        d="M5 14.486c-1.25.687-2 1.561-2 2.514 0 2.21 4.03 4 9 4s9-1.79 9-4c0-.953-.75-1.827-2-2.514M12 6.5v5M9.5 9h5"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9.222c0 3.437-2.686 6.222-6 7.778-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222z"
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

LocationMed2.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

LocationMed2.displayName = 'SvgLocationMed2';
export default createIcon(LocationMed2);
