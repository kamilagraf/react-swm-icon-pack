import * as React from 'react';
import PropTypes from 'prop-types';

const QuestionSmall = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 14.857c0-3.214 3-2.5 3-5A2.73 2.73 0 0014.863 9M12 17v-.007M9.137 9C9.52 7.84 10.657 7 12 7c.35 0 .687.057 1 .163"
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
        d="M12 14.857c0-3.214 3-2.5 3-5C15 8.28 13.657 7 12 7c-1.343 0-2.48.84-2.863 2M12 17v-.007"
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
        d="M12 14.857c0-3.214 3-2.5 3-5C15 8.28 13.657 7 12 7c-1.343 0-2.48.84-2.863 2M12 17v-.007"
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
        d="M12 14.857c0-3.214 3-2.5 3-5C15 8.28 13.657 7 12 7c-1.343 0-2.48.84-2.863 2M12 17v-.007"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 16.99V17" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 14c0-2 3-2 3-4.09C15 8.301 13.683 7 12 7c-1.42 0-2.662.927-3 2.182"
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

QuestionSmall.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

QuestionSmall.displayName = 'SvgQuestionSmall';
export default QuestionSmall;
