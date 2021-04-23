import * as React from 'react';
import PropTypes from 'prop-types';

const TestTube = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 10.778l1.06-1.06 3.89 3.889 5.657 5.657a4 4 0 005.657-5.657l-2.122-2.122M10.778 3l-1.06 1.06 1.856 1.857m5.568 5.568L14.657 9m2.485 2.485L11 12.903"
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
        d="M10.272 3l-.808.808 9.89 9.889a4.007 4.007 0 01.01 5.667 4.007 4.007 0 01-5.667-.01l-9.89-9.89-.807.808m5.05 3.435c1.414-1.414 3.195-.248 4.95-1.207 1.941-1.06 3.182-.56 4.243-.914"
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
        d="M13.697 19.354a4.007 4.007 0 005.667.01 4.007 4.007 0 00-.01-5.667l-2.111-2.111c-1.061.353-2.302-.147-4.243.914-1.755.959-3.535-.207-4.95 1.207l5.647 5.647z"
        fill={color}
      />
      <path
        d="M3 10.778l1.06-1.06 3.89 3.889M10.778 3l-1.06 1.06 7.424 7.425M7.95 13.607l5.657 5.657a4 4 0 005.657-5.657l-2.122-2.122M7.95 13.607l9.192-2.122"
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
        d="M3 10.778l1.06-1.06 3.89 3.889M10.778 3l-1.06 1.06 7.424 7.425M7.95 13.607l5.657 5.657a4 4 0 005.657-5.657l-2.122-2.122M7.95 13.607l9.192-2.122"
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
        d="M8.05 13.707c1.415-1.414 3.195-.248 4.95-1.207 1.941-1.06 3.182-.56 4.243-.914"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.272 3l-.808.808 9.89 9.889a4.007 4.007 0 01.01 5.667 4.007 4.007 0 01-5.667-.01l-9.89-9.89-.807.808"
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

TestTube.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

TestTube.displayName = 'SvgTestTube';
export default TestTube;
