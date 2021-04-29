import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const BoneBroken = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M3 15.5a2.5 2.5 0 003.064 2.436A2.5 2.5 0 1011 18.5v0c0-.759-.164-1.559.173-2.238.244-.492.537-.958.875-1.393L10 14v-1l-.874-1.044a8.204 8.204 0 01-1.387.87c-.68.338-1.48.174-2.239.174v0c-.476 0-.92.133-1.299.363m16.635-3.972a2.5 2.5 0 00-2.9-3.327A2.5 2.5 0 1013 5.5v0c0 .759.164 1.56-.173 2.239-.244.49-.536.955-.873 1.389l.73 2.293L14 11l.876 1.043a8.203 8.203 0 011.385-.87c.68-.337 1.48-.173 2.239-.173v0h.5"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.203 8.203 0 00-1.385.87L14 11l-1.315.421-.73-2.293c.336-.434.628-.9.872-1.389.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0zM11 18.5a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173.49-.243.954-.535 1.387-.871L10 13v1l2.048.87c-.338.434-.63.9-.875 1.392-.337.68-.173 1.48-.173 2.238z"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.203 8.203 0 00-1.385.87L14 11l-1.315.421-.73-2.293c.336-.434.628-.9.872-1.389.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0zM11 18.5a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173.49-.243.954-.535 1.387-.871L10 13v1l2.048.87c-.338.434-.63.9-.875 1.392-.337.68-.173 1.48-.173 2.238z"
        fill={color}
        opacity={0.15}
      />
      <path
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.203 8.203 0 00-1.385.87L14 11l-1.315.421-.73-2.293c.336-.434.628-.9.872-1.389.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0zM11 18.5a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173.49-.243.954-.535 1.387-.871L10 13v1l2.048.87c-.338.434-.63.9-.875 1.392-.337.68-.173 1.48-.173 2.238z"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.759 0-1.559-.164-2.239.173a8.203 8.203 0 00-1.385.87L14 11l-1.315.421-.73-2.293c.336-.434.628-.9.872-1.389.337-.68.173-1.48.173-2.239a2.5 2.5 0 015 0zM11 18.5a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173.49-.243.954-.535 1.387-.871L10 13v1l2.048.87c-.338.434-.63.9-.875 1.392-.337.68-.173 1.48-.173 2.238z"
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
        d="M18 5.5c0 .194-.022.383-.064.564A2.5 2.5 0 1118.5 11c-.76 0-1.56-.164-2.239.173a8.203 8.203 0 00-1.385.87L14 11l-1.316.421-.73-2.293c.337-.434.63-.9.872-1.389.338-.68.174-1.48.174-2.239a2.5 2.5 0 015 0z"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18.5a2.5 2.5 0 11-4.936-.564A2.5 2.5 0 115.5 13c.759 0 1.56.164 2.239-.173a8.21 8.21 0 001.387-.871L10 13v1l2.048.87c-.338.434-.63.9-.875 1.392-.337.68-.173 1.48-.173 2.238z"
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

BoneBroken.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

BoneBroken.displayName = 'SvgBoneBroken';
export default createIcon(BoneBroken);
