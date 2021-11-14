import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Redo = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M20 9V15H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 15C17.6726 12.9114 15.5171 10.5468 12.2547 10.0878C10.3223 9.81593 8.35394 10.1794 6.64612 11.1234C4.93831 12.0675 3.58358 13.5409 2.78606 15.3218"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M20 9V15H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 15C17.6726 12.9114 15.5171 10.5468 12.2547 10.0878C10.3223 9.81593 8.35394 10.1794 6.64612 11.1234C4.93831 12.0675 3.58358 13.5409 2.78606 15.3218"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M20 9V15H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 15C17.6726 12.9114 15.5171 10.5468 12.2547 10.0878C10.3223 9.81593 8.35394 10.1794 6.64612 11.1234C4.93831 12.0675 3.58358 13.5409 2.78606 15.3218"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20 9V15H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 15C17.6726 12.9114 15.5171 10.5468 12.2547 10.0878C10.3223 9.81593 8.35394 10.1794 6.64612 11.1234C4.93831 12.0675 3.58358 13.5409 2.78606 15.3218"
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

Redo.propTypes = {
  props: iconType,
};

Redo.displayName = 'Redo';
export default createIcon(Redo);
