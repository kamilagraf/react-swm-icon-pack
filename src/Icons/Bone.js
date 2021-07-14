import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const Bone = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M14.107 12.721a8.204 8.204 0 012.154-1.548c.68-.337 1.48-.173 2.239-.173a2.5 2.5 0 10-.564-4.936A2.5 2.5 0 1013 5.5c0 .759.164 1.56-.173 2.239M11.949 15c-.297.397-.556.82-.776 1.262-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.206 8.206 0 002.154-1.548l.693-.693"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.204 8.204 0 00-2.154 1.548l-1.386 1.386a8.206 8.206 0 00-1.548 2.155c-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.206 8.206 0 002.154-1.548l1.386-1.386a8.207 8.207 0 001.548-2.154c.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0z"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.204 8.204 0 00-2.154 1.548l-1.386 1.386a8.206 8.206 0 00-1.548 2.155c-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.206 8.206 0 002.154-1.548l1.386-1.386a8.207 8.207 0 001.548-2.154c.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0z"
        fill={color}
      />
      <path
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.204 8.204 0 00-2.154 1.548l-1.386 1.386a8.206 8.206 0 00-1.548 2.155c-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.206 8.206 0 002.154-1.548l1.386-1.386a8.207 8.207 0 001.548-2.154c.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0z"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.204 8.204 0 00-2.154 1.548l-1.386 1.386a8.206 8.206 0 00-1.548 2.155c-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.206 8.206 0 002.154-1.548l1.386-1.386a8.207 8.207 0 001.548-2.154c.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0z"
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
        d="M17.936 6.064A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.204 8.204 0 00-2.154 1.548l-1.386 1.386a8.206 8.206 0 00-1.548 2.155c-.337.68-.173 1.48-.173 2.238a2.5 2.5 0 11-4.936-.564"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.936 6.064A2.5 2.5 0 1013 5.5c0 .759.164 1.56-.173 2.239a8.207 8.207 0 01-1.548 2.154l-1.386 1.386a8.206 8.206 0 01-2.154 1.548c-.68.337-1.48.173-2.239.173a2.5 2.5 0 10.564 4.936"
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

Bone.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

Bone.displayName = 'Bone';
export default createIcon(Bone);
