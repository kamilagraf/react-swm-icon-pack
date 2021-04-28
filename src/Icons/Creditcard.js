import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Creditcard = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 10V8a2 2 0 00-2-2h-2m4 4v6a2 2 0 01-2 2h-7m9-8H3m0 0v6a2 2 0 002 2h2m-4-8V8a2 2 0 012-2h7m-6 9h4"
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
        d="M20.906 10c-.168-1.753-.537-3.087-.906-3.333C19.5 6.333 16 6 12 6s-7.5.333-8 .667c-.369.246-.738 1.58-.906 3.333m17.812 0c.06.624.094 1.3.094 2 0 2.667-.5 5-1 5.333-.5.334-4 .667-8 .667s-7.5-.333-8-.667C3.5 17 3 14.667 3 12c0-.7.034-1.376.094-2m17.812 0H3.094M7 14h5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 18h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z" fill={color} />
      <path
        d="M21 10V8a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0H3m3 5h4"
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
        d="M21 10V8a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0H3m3 5h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M3 10h18M6 15h3.5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
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

Creditcard.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Creditcard.displayName = 'SvgCreditcard';
export default createIcon(Creditcard);
