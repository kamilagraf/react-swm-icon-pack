import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Virus = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 5a7 7 0 013 13.326M12 5V2.5M12 5c-.34 0-.673.024-1 .07M13 12a2 2 0 10-2-2m0 5a1 1 0 11-1.693-.72M8 11v.01M15 15v.01m-3 6.49V19a7 7 0 01-7-7c0-2.61 1.382-4.859 3.5-6.062M2.5 12H3m18.5 0H21M5.938 8.5L3.773 7.25m16.454 9.5l-2.165-1.25M7.25 3.773l.312.541m9.188 15.913l-1.25-2.165M5.938 15.5l-2.165 1.25m16.454-9.5l-.541.312M7.25 20.227l.312-.541M16.75 3.773L15.5 5.938"
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
        d="M19 12a7 7 0 01-7 7m7-7a7 7 0 00-7-7m7 7h2.5M12 19a7 7 0 01-7-7m7 7v2.5M5 12a7 7 0 017-7m-7 7H2.5M12 5V2.5M8 11v.01M15 15v.01M5.938 8.5L3.773 7.25m16.454 9.5l-2.165-1.25M8.5 5.938L7.25 3.773m9.5 16.454l-1.25-2.165M5.938 15.5l-2.165 1.25m16.454-9.5L18.062 8.5M8.5 18.062l-1.25 2.165m9.5-16.454L15.5 5.938M15 10a2 2 0 11-4 0 2 2 0 014 0zm-4 5a1 1 0 11-2 0 1 1 0 012 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" fill={color} />
      <path
        d="M19 12a7 7 0 01-7 7m7-7a7 7 0 00-7-7m7 7h2.5M12 19a7 7 0 01-7-7m7 7v2.5M5 12a7 7 0 017-7m-7 7H2.5M12 5V2.5M8 11v.01M15 15v.01M5.938 8.5L3.773 7.25m16.454 9.5l-2.165-1.25M8.5 5.938L7.25 3.773m9.5 16.454l-1.25-2.165M5.938 15.5l-2.165 1.25m16.454-9.5L18.062 8.5M8.5 18.062l-1.25 2.165m9.5-16.454L15.5 5.938M15 10a2 2 0 11-4 0 2 2 0 014 0zm-4 5a1 1 0 11-2 0 1 1 0 012 0z"
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
        d="M19 12a7 7 0 01-7 7m7-7a7 7 0 00-7-7m7 7h2.5M12 19a7 7 0 01-7-7m7 7v2.5M5 12a7 7 0 017-7m-7 7H2.5M12 5V2.5M8 11v.01M15 15v.01M5.938 8.5L3.773 7.25m16.454 9.5l-2.165-1.25M8.5 5.938L7.25 3.773m9.5 16.454l-1.25-2.165M5.938 15.5l-2.165 1.25m16.454-9.5L18.062 8.5M8.5 18.062l-1.25 2.165m9.5-16.454L15.5 5.938M15 10a2 2 0 11-4 0 2 2 0 014 0zm-4 5a1 1 0 11-2 0 1 1 0 012 0z"
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
        d="M8 11v.01M15 15v.01M15 10a2 2 0 11-4 0 2 2 0 014 0zm-4 5a1 1 0 11-2 0 1 1 0 012 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12a7 7 0 01-7 7m7-7a7 7 0 00-7-7m7 7h2.5M12 19a7 7 0 01-7-7m7 7v2.5M5 12a7 7 0 017-7m-7 7H2.5M12 5V2.5m-6.062 6L3.773 7.25m16.454 9.5l-2.165-1.25M8.5 5.938L7.25 3.773m9.5 16.454l-1.25-2.165M5.938 15.5l-2.165 1.25m16.454-9.5L18.062 8.5M8.5 18.062l-1.25 2.165m9.5-16.454L15.5 5.938"
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

Virus.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Virus.displayName = 'SvgVirus';
export default createIcon(Virus);
