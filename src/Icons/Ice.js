import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Ice = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 20L12 17L15 20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 4L12 7L9 4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 21V17V12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 9L12 8V3" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.7942 7.5L16.3301 9.5L12 12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.40196 13.5L8.53594 14L4.20581 16.5" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M17.4282 18.5981L16.3301 14.5L20.4282 13.4019"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.57178 5.40193L7.66985 9.50001L3.57178 10.5981"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20581 7.5L7.66991 9.5L12 12L16.3302 14.5L19.7943 16.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4283 10.598L16.3302 9.49995L17.4283 5.40187"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.57178 13.4019L7.66985 14.4999L6.57178 18.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 20L12 17L15 20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 4L12 7L9 4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 3V7V12V17V21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M17.4282 18.598L16.3301 14.4999L20.4282 13.4019"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.57178 5.40187L7.66985 9.49995L3.57178 10.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20581 7.5L7.66991 9.5L12 12L16.3302 14.5L19.7943 16.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4282 10.598L16.3301 9.49995L17.4282 5.40187"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.57178 13.4019L7.66985 14.4999L6.57178 18.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20581 16.5L7.66991 14.5L12 12L16.3302 9.5L19.7943 7.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M9 20L12 17L15 20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 4L12 7L9 4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 3V7V12V17V21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M17.4282 18.5981L16.3301 14.5L20.4282 13.4019"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.57181 5.40193L7.66988 9.50001L3.57181 10.5981"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20578 7.5L7.66988 9.5L12 12L16.3301 14.5L19.7942 16.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4282 10.598L16.3301 9.49995L17.4282 5.40187"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.57181 13.4019L7.66988 14.4999L6.57181 18.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20584 16.5L7.66994 14.5L12.0001 12L16.3302 9.5L19.7943 7.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 20L12 17L15 20" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 4L12 7L9 4" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 3V7V12V17V21" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M17.4282 18.598L16.3301 14.4999L20.4282 13.4019"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.57181 5.40187L7.66988 9.49995L3.57181 10.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20578 7.5L7.66988 9.5L12 12L16.3301 14.5L19.7942 16.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4282 10.598L16.3301 9.49995L17.4282 5.40187"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.57181 13.4019L7.66988 14.4999L6.57181 18.598"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20584 16.5L7.66994 14.5L12.0001 12L16.3302 9.5L19.7943 7.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
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

Ice.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Ice.displayName = 'Ice';
export default createIcon(Ice);
