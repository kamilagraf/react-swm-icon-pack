import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Laptop = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5.5H5C4.44772 5.5 4 5.94771 4 6.5V15.5C4 16.0523 4.44772 16.5 5 16.5H19C19.5523 16.5 20 16.0523 20 15.5V6.5C20 5.94772 19.5523 5.5 19 5.5H16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16.5H19M12 19H20.25C20.9404 19 21.5 18.4404 21.5 17.75C21.5 17.0596 20.9404 16.5 20.25 16.5H3.75C3.05964 16.5 2.5 17.0596 2.5 17.75C2.5 18.4404 3.05964 19 3.75 19H7"
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
        d="M20 16.3846C20.5 16.0769 21 13.4615 21 11C21 8.53846 20.5 5.92308 20 5.61538C19.5 5.30769 16 5 12 5C8 5 4.5 5.30769 4 5.61538C3.5 5.92308 3 8.53846 3 11C3 13.4615 3.5 16.0769 4 16.3846"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 16.5H3.75C3.05964 16.5 2.5 17.0596 2.5 17.75C2.5 18.4404 3.05964 19 3.75 19H20.25C20.9404 19 21.5 18.4404 21.5 17.75C21.5 17.0596 20.9404 16.5 20.25 16.5Z"
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
        d="M5 5.5H19C19.5523 5.5 20 5.94772 20 6.5V15.5C20 16.0523 19.5523 16.5 19 16.5H20.25C20.9404 16.5 21.5 17.0596 21.5 17.75C21.5 18.4404 20.9404 19 20.25 19H3.75C3.05964 19 2.5 18.4404 2.5 17.75C2.5 17.0596 3.05964 16.5 3.75 16.5H5C4.44772 16.5 4 16.0523 4 15.5V6.5C4 5.94771 4.44772 5.5 5 5.5Z"
        fill={color}
      />
      <path
        d="M19 5.5H5C4.44772 5.5 4 5.94771 4 6.5V15.5C4 16.0523 4.44772 16.5 5 16.5H19C19.5523 16.5 20 16.0523 20 15.5V6.5C20 5.94772 19.5523 5.5 19 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16.5H19M3.75 19H20.25C20.9404 19 21.5 18.4404 21.5 17.75C21.5 17.0596 20.9404 16.5 20.25 16.5H3.75C3.05964 16.5 2.5 17.0596 2.5 17.75C2.5 18.4404 3.05964 19 3.75 19Z"
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
        d="M19 5.5H5C4.44772 5.5 4 5.94771 4 6.5V15.5C4 16.0523 4.44772 16.5 5 16.5H19C19.5523 16.5 20 16.0523 20 15.5V6.5C20 5.94772 19.5523 5.5 19 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16.5H19M3.75 19H20.25C20.9404 19 21.5 18.4404 21.5 17.75C21.5 17.0596 20.9404 16.5 20.25 16.5H3.75C3.05964 16.5 2.5 17.0596 2.5 17.75C2.5 18.4404 3.05964 19 3.75 19Z"
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

Laptop.propTypes = {
  props: iconType,
};

Laptop.displayName = 'Laptop';
export default createIcon(Laptop);
