import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Cardiology = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19.232 12.5l.437-.453A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333l.437.453m14.464 0l-3.616 3.75m3.616-3.75H16L14 8l-.75 1.625M12 20l-7.232-7.5m0 0H8l1-2 2 4 .75-1.625"
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
        d="M20.404 12.5A6.992 6.992 0 0021 9.714C21 6 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38l-.52.54a1 1 0 01-1.44 0l-.52-.54A4.465 4.465 0 007.546 4C5 4 3 6 3 9.714c0 .987.222 1.918.596 2.786m16.808 0C18.395 17.158 12 20 12 20s-6.395-2.842-8.404-7.5m16.808 0h-4.08a.5.5 0 01-.456-.297l-1.42-3.194a.5.5 0 00-.91-.007l-2.102 4.553a.5.5 0 01-.901.014l-1.088-2.175a.5.5 0 00-.894 0l-.415.83a.5.5 0 01-.447.276H3.596"
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
        d="M19.232 12.5l.437-.453A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333l.437.453m14.464 0L12 20l-7.232-7.5m14.464 0H16L14 8l-3 6.5-2-4-1 2H4.768"
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
        d="M19.232 12.5l.437-.453A4.804 4.804 0 0021 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 00-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 007.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333l.437.453m14.464 0L12 20l-7.232-7.5m14.464 0H16L14 8l-3 6.5-2-4-1 2H4.768"
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
        d="M4.781 12.5H8l1-2 2 4L14 8l2 4.5h3.223"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
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

Cardiology.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Cardiology.displayName = 'SvgCardiology';
export default createIcon(Cardiology);
