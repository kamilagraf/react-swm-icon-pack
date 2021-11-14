import * as React from 'react';
import { iconType } from '../types';
import createIcon from '../helpers/createIcon';

const Camera = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M21 13V17C21 18.1046 20.1046 19 19 19H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M5 19C3.89543 19 3 18.1046 3 17V9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M21 13C21 10.3333 20.5 8 20 7.66667C19.6796 7.45303 18.1268 7.2394 16 7.11352C14.8083 7.04298 17 5 12 5C7 5 9.19168 7.04298 8 7.11352C5.87316 7.2394 4.32045 7.45303 4 7.66667C3.5 8 3 10.3333 3 13C3 15.6667 3.5 18 4 18.3333C4.5 18.6667 8 19 12 19C16 19 19.5 18.6667 20 18.3333C20.5 18 21 15.6667 21 13Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H16.5C15.9477 7 15.5 6.55228 15.5 6C15.5 5.44772 15.0523 5 14.5 5H9.5C8.94772 5 8.5 5.44772 8.5 6C8.5 6.55228 8.05228 7 7.5 7H5ZM15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
        fill={color}
      />
      <path
        d="M21 17V9C21 7.89543 20.1046 7 19 7H16.5C15.9477 7 15.5 6.55228 15.5 6C15.5 5.44772 15.0523 5 14.5 5H9.5C8.94772 5 8.5 5.44772 8.5 6C8.5 6.55228 8.05228 7 7.5 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.25 13C14.25 14.2426 13.2426 15.25 12 15.25V16.75C14.0711 16.75 15.75 15.0711 15.75 13H14.25ZM12 15.25C10.7574 15.25 9.75 14.2426 9.75 13H8.25C8.25 15.0711 9.92893 16.75 12 16.75V15.25ZM9.75 13C9.75 11.7574 10.7574 10.75 12 10.75V9.25C9.92893 9.25 8.25 10.9289 8.25 13H9.75ZM12 10.75C13.2426 10.75 14.25 11.7574 14.25 13H15.75C15.75 10.9289 14.0711 9.25 12 9.25V10.75Z"
        fill={color}
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M21 17V9C21 7.89543 20.1046 7 19 7H16.5C15.9477 7 15.5 6.55228 15.5 6C15.5 5.44772 15.0523 5 14.5 5H9.5C8.94772 5 8.5 5.44772 8.5 6C8.5 6.55228 8.05228 7 7.5 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.25 13C14.25 14.2426 13.2426 15.25 12 15.25V16.75C14.0711 16.75 15.75 15.0711 15.75 13H14.25ZM12 15.25C10.7574 15.25 9.75 14.2426 9.75 13H8.25C8.25 15.0711 9.92893 16.75 12 16.75V15.25ZM9.75 13C9.75 11.7574 10.7574 10.75 12 10.75V9.25C9.92893 9.25 8.25 10.9289 8.25 13H9.75ZM12 10.75C13.2426 10.75 14.25 11.7574 14.25 13H15.75C15.75 10.9289 14.0711 9.25 12 9.25V10.75Z"
        fill={color}
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

Camera.propTypes = {
  props: iconType,
};

Camera.displayName = 'Camera';
export default createIcon(Camera);
