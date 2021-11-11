import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Power = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M5 14C5 11.6212 6.18652 9.51963 8 8.25468" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 8.2547C17.8135 9.51965 19 11.6213 19 14C19 17.866 15.866 21 12 21C10.0927 21 8.36355 20.2372 7.10101 19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M9 7.67363C6.63505 8.79709 5 11.2076 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 11.2076 17.3649 8.79709 15 7.67363"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        d="M8 8.25468C6.18652 9.51963 5 11.6212 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 11.6212 17.8135 9.51963 16 8.25468"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M8 8.2547C6.18652 9.51965 5 11.6213 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 11.6213 17.8135 9.51965 16 8.2547"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

Power.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Power.displayName = 'Power';
export default createIcon(Power);
