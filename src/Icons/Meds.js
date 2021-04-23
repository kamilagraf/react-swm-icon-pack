import * as React from 'react';
import PropTypes from 'prop-types';

const Meds = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M8 7h8M8 7a1 1 0 01-1-1V5a1 1 0 011-1h4M8 7v2l-1.789 3.578a2 2 0 00-.211.894V19a2 2 0 002 2m8-14v2l1.789 3.578a2 2 0 01.211.894V19a2 2 0 01-2 2h-4m4-14a1 1 0 001-1V5a1 1 0 00-1-1h-1m-3 7v6m-3-3h1m5 0h-3"
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
        d="M12 11v6m-3-3h6M8 6.89c.75.06 2.293.11 4 .11 1.707 0 3.25-.05 4-.11m-8 0a2.883 2.883 0 01-.444-.057C7.278 6.75 7 6.167 7 5.5c0-.667.278-1.25.556-1.333C7.833 4.083 9.778 4 12 4s4.167.083 4.444.167c.278.083.556.666.556 1.333 0 .667-.278 1.25-.556 1.333A2.88 2.88 0 0116 6.89m-8 0V9l-1.789 3.578a2 2 0 00-.211.894V19a2 2 0 002 2h8a2 2 0 002-2v-5.528a2 2 0 00-.211-.894L16 9V6.89"
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
        opacity={0.15}
        d="M6 13.472a2 2 0 01.211-.894L8 9V7h8v2l1.789 3.578a2 2 0 01.211.894V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-5.528z"
        fill={color}
      />
      <path
        d="M8 7v2l-1.789 3.578a2 2 0 00-.211.894V19a2 2 0 002 2h8a2 2 0 002-2v-5.528a2 2 0 00-.211-.894L16 9V7M8 7h8M8 7a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1m-4 4v6m-3-3h6"
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
        d="M8 7v2l-1.789 3.578a2 2 0 00-.211.894V19a2 2 0 002 2h8a2 2 0 002-2v-5.528a2 2 0 00-.211-.894L16 9V7M8 7h8M8 7a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1m-4 4v6m-3-3h6"
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
        d="M8 7v2l-1.789 3.578a2 2 0 00-.211.894V19a2 2 0 002 2h8a2 2 0 002-2v-5.528a2 2 0 00-.211-.894L16 9V7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v6m-3-3h6M8 7h8a1 1 0 001-1V5a1 1 0 00-1-1H8a1 1 0 00-1 1v1a1 1 0 001 1z"
        stroke={secondaryColor}
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

Meds.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Meds.displayName = 'SvgMeds';
export default Meds;
