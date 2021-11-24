import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Bell = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M9 17V18C9 18.394 9.0776 18.7841 9.22836 19.1481C9.37913 19.512 9.6001 19.8427 9.87868 20.1213C10.1573 20.3999 10.488 20.6209 10.8519 20.7716C11.2159 20.9224 11.606 21 12 21C12.394 21 12.7841 20.9224 13.1481 20.7716C13.512 20.6209 13.8427 20.3999 14.1213 20.1213C14.3999 19.8427 14.6209 19.512 14.7716 19.1481C14.9224 18.7841 15 18.394 15 18V17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9C18 12 20 17 20 17H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 3.82461C14.1129 3.30174 13.0861 3 12 3C8.732 3 6 5.732 6 9C6 13 4 17 4 17H6"
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
        d="M12 3.5C8.68628 3.5 5.99999 5.18629 5.99999 8.5C5.99999 10.4392 5.29493 12.6133 4.56842 14.3389C3.96518 15.7717 4.97778 17.5 6.53237 17.5H17.4676C19.0222 17.5 20.0348 15.7717 19.4316 14.3389C18.705 12.6133 18 10.4392 18 8.5C18 5.18629 15.3137 3.5 12 3.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.6569 21 15 20.1569 15 18.5V17.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity="0.15" d="M12 3C8.68629 3 6 5.68629 6 9C6 13 4 17 4 17H20C20 17 18 13 18 9C18 5.68629 15.3137 3 12 3Z" fill={color} />
      <path
        d="M9 17V18C9 18.394 9.0776 18.7841 9.22836 19.1481C9.37913 19.512 9.6001 19.8427 9.87868 20.1213C10.1573 20.3999 10.488 20.6209 10.8519 20.7716C11.2159 20.9224 11.606 21 12 21C12.394 21 12.7841 20.9224 13.1481 20.7716C13.512 20.6209 13.8427 20.3999 14.1213 20.1213C14.3999 19.8427 14.6209 19.512 14.7716 19.1481C14.9224 18.7841 15 18.394 15 18V17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17C20 17 18 12 18 9C18 5.732 15.268 3 12 3C8.732 3 6 5.732 6 9C6 13 4 17 4 17H20Z"
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
        d="M9 17V18C9 18.394 9.0776 18.7841 9.22836 19.1481C9.37913 19.512 9.6001 19.8427 9.87868 20.1213C10.1573 20.3999 10.488 20.6209 10.8519 20.7716C11.2159 20.9224 11.606 21 12 21C12.394 21 12.7841 20.9224 13.1481 20.7716C13.512 20.6209 13.8427 20.3999 14.1213 20.1213C14.3999 19.8427 14.6209 19.512 14.7716 19.1481C14.9224 18.7841 15 18.394 15 18V17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17C20 17 18 12 18 9C18 5.732 15.268 3 12 3C8.732 3 6 5.732 6 9C6 13 4 17 4 17H20Z"
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

Bell.propTypes = {
  props: iconType,
};

Bell.displayName = 'Bell';
export default createIcon(Bell);
