import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Wallet = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M21 15V9h-7a3 3 0 100 6h4m-4-3v.01M12 6H5a2 2 0 00-2 2v8a2 2 0 002 2h2m9-12h3a2 2 0 012 2v8a2 2 0 01-2 2h-8"
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
        d="M14 12v.01M20.782 9c-.192-1.245-.487-2.137-.782-2.333C19.5 6.333 16 6 12 6s-7.5.333-8 .667c-.369.246-.738 1.58-.906 3.333-.06.624-.094 1.3-.094 2 0 2.667.5 5 1 5.333.5.334 4 .667 8 .667s7.5-.333 8-.667c.295-.196.59-1.088.782-2.333m0-6c.048.313.09.648.124 1 .06.624.094 1.3.094 2 0 1.095-.084 2.133-.218 3m0-6H14a3 3 0 100 6h6.782"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M19 6H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-1h-7a3 3 0 110-6h7V8a2 2 0 00-2-2z" fill={color} />
      <path
        d="M14 12v.01M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm16-9h-7a3 3 0 100 6h7V9z"
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
        d="M14 12v.01M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm16-9h-7a3 3 0 100 6h7V9z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M21 9h-7a3 3 0 100 6h7m-7-3v.01" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 9v6M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
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

Wallet.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Wallet.displayName = 'SvgWallet';
export default createIcon(Wallet);
