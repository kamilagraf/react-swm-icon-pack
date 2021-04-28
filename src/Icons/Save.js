import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Save = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M15 20v-5H9v5m-5-8v6a2 2 0 002 2h12a2 2 0 002-2v-2M4 8V6a2 2 0 012-2h8.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0120 9.828V12"
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
        d="M15 19.893c2.172-.158 3.799-.47 4.111-.782.445-.444.889-3.555.889-7.111 0-.631-.038-1.576-.068-2.236a1.975 1.975 0 00-.58-1.305l-3.811-3.812a1.976 1.976 0 00-1.305-.579C13.576 4.038 12.631 4 12 4c-3.556 0-6.667.444-7.111.889C4.444 5.333 4 8.444 4 12c0 3.556.444 6.667.889 7.111.312.312 1.939.624 4.111.782m6 0A41.72 41.72 0 0112 20a41.72 41.72 0 01-3-.107m6 0V18s0-3-3-3-3 3-3 3v1.893"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M4 6a2 2 0 012-2h8.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0120 9.828V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill={color} />
      <path
        d="M15 20v-5H9v5M20 9.828V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0120 9.828z"
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
        d="M15 20v-5H9v5M20 9.828V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0120 9.828z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M15 20v-5H9v5" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 6a2 2 0 012-2h8.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0120 9.828V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
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

Save.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Save.displayName = 'SvgSave';
export default createIcon(Save);
