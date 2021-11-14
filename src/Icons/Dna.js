import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Dna = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M20.6777 15.0208L19.2635 16.4351" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.0208 20.6777L16.435 19.2635" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.8492 12.1924L15.0208 15.0208" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 6.53555L10.7782 7.94977" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.53564 12.1924L7.94986 10.7782" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.70709 9.36395L6.53552 6.53553" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.7279 21.3848L15.0208 20.6777L12.1924 17.8492C10.6303 16.2871 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2871 10.6303 17.8492 12.1924L20.6777 15.0208L21.3848 15.7279"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M20.6777 15.0209L15.0209 20.6777" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 17.8492L17.8492 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 6.53553L6.53552 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.36401 3.70716L3.70715 9.36401" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8493C10.6303 16.2872 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0209L21.3848 15.728"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M12.0001 12C13.5621 10.4379 16.0948 10.4379 17.6569 12L20.4853 14.8284L14.8285 20.4853L12.0001 17.6568C10.438 16.0947 10.438 13.5621 12.0001 12C10.438 13.5621 7.90529 13.5621 6.3432 12L3.51477 9.17156L9.17162 3.51471L12.0001 6.34314C13.5621 7.90523 13.5621 10.4379 12.0001 12Z"
        fill={color}
      />
      <path d="M20.6777 15.0208L15.0209 20.6777" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 17.8492L17.8492 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 6.53553L6.53552 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.36401 3.7071L3.70715 9.36395" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8492C10.6303 16.2871 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0208L21.3848 15.7279"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20.6777 15.0209L15.0209 20.6777" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 17.8492L17.8492 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1924 6.53553L6.53552 12.1924" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.36401 3.70716L3.70715 9.36401" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8493C10.6303 16.2872 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0209L21.3848 15.728"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001"
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

Dna.propTypes = {
  props: iconType,
};

Dna.displayName = 'Dna';
export default createIcon(Dna);
