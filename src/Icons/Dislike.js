import * as React from 'react';
import { iconType } from 'types';
import createIcon from '../helpers/createIcon';

const Dislike = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M8 10V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.3604 4.00002C18.3138 4.00002 19.1346 4.67294 19.3216 5.60779L20.5216 11.6078C20.7691 12.8454 19.8225 14 18.5604 14H14L16.4258 17.6387C17.1929 18.7894 16.5885 20.3529 15.2467 20.6883L15.1992 20.7002C14.4642 20.884 13.6886 20.6367 13.1956 20.0615L8 14H4V4.00002H8L12 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M8 14V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.3604 4.00002H8H4V14H8L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002Z"
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
        d="M8 14V4H17.3604C18.3138 4 19.1346 4.67292 19.3216 5.60777L20.5216 11.6078C20.7691 12.8453 19.8225 14 18.5604 14H14L16.4258 17.6386C17.1929 18.7894 16.5885 20.3529 15.2467 20.6883L15.1992 20.7002C14.4642 20.8839 13.6886 20.6367 13.1956 20.0615L8 14Z"
        fill={color}
      />
      <path d="M8 14V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.3604 4.00002H8H4V14H8L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M8 14V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.3604 4.00002H8H4V14H8L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002Z"
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

Dislike.propTypes = {
  props: iconType,
};

Dislike.displayName = 'Dislike';
export default createIcon(Dislike);
