import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from 'helpers/createIcon';

const Heart = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 20l-7.669-7.953A4.804 4.804 0 013 8.714C3 6.111 5.035 4 7.546 4c1.205 0 2.361.497 3.214 1.38L12 6.668l1.24-1.286A4.465 4.465 0 0116.454 4C18.964 4 21 6.11 21 8.714c0 1.25-.479 2.45-1.331 3.333L15 16.89"
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
        d="M12 20s9-4 9-10.286C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714 3 16 12 20 12 20z"
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
        d="M4.331 12.047L12 20l7.669-7.953A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333z"
        fill={color}
      />
      <path
        d="M4.331 12.047L12 20l7.669-7.953A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333z"
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
        d="M4.331 12.047L12 20l7.669-7.953A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333z"
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
        d="M12 20l7.669-7.953A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20l-7.669-7.953A4.804 4.804 0 013 8.714C3 6.111 5.035 4 7.546 4c1.205 0 2.361.497 3.214 1.38L12 6.668"
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

Heart.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Heart.displayName = 'SvgHeart';
export default createIcon(Heart);
